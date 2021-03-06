import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../../components/Searchbar';
import MoviesList from '../../components/MoviesList';
import movieDbApi from '../../services/MovieDbApi';
import qs from 'query-string';

import scss from './MoviesPage.module.scss';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
    error: null,
  };

  componentDidMount() {
    const { location } = this.props;

    const { query } = qs.parse(location.search);

    query &&
      movieDbApi.fetchMoviesUponRequest(query).then(results => {
        this.setState({ movies: results });
      });
  }

  handleSubmit = query => {
    const { history } = this.props;
    this.setState({ query });
    movieDbApi
      .fetchMoviesUponRequest(query)
      .then(results => {
        this.setState({ movies: results });
      })
      .catch(error => console.log(error));

    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const isShowMovies = movies.length > 0;

    return (
      <section className={scss.movies}>
        <Searchbar onSubmit={this.handleSubmit} />

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
