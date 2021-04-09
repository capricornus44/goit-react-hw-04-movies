import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

import Searchbar from '../../components/Searchbar';
import MoviesList from '../../components/MoviesList';
import Loader from 'react-loader-spinner';
import movieDbApi from '../../services/MovieDbApi';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import scss from './MoviesPage.module.scss';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { location } = this.props;
    const getMovies = new URLSearchParams(location.search).get('query');

    if (!getMovies) {
      return;
    }
    this.onSubmit(getMovies);
  }

  handleSubmit = query => {
    const { history } = this.props;
    this.setState({ query });
    movieDbApi.fetchMoviesUponRequest(query).then(results => {
      this.setState({ movies: results });
    });

    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, isLoading } = this.state;
    const isShowMovies = movies.length > 0;

    return (
      <section className={scss.movies}>
        <Searchbar onSubmit={this.handleSubmit} />

        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        )}

        {isShowMovies && (
          <MoviesList location={this.props.location} movies={movies} />
        )}
        <ToastContainer autoClose={3000} position="top-right" type="default" />
      </section>
    );
  }
}

MoviesPage.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    query: PropTypes.string,
  }).isRequired,
};

export default MoviesPage;
