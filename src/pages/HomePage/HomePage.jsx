import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import movieDbApi from '../../services/MovieDbApi';

import scss from './HomePage.module.scss';

class HomePage extends Component {
  state = {
    trendMoviesList: [],
  };

  async componentDidMount() {
    movieDbApi
      .fetchTrendingMovies()
      .then(results => this.setState({ trendMoviesList: results }));
  }

  render() {
    return (
      <>
        <ul className={scss.grid}>
          {this.state.trendMoviesList.map(({ id, poster_path, title }) => (
            <li key={id} className={scss.item}>
              <NavLink
                to={`${this.props.match.url}movies/${id}`}
                className={scss.navLink}
              >
                <img
                  src={
                    poster_path &&
                    `https://image.tmdb.org/t/p/w500/${poster_path}`
                  }
                  alt={`${title} poster`}
                  className={scss.poster}
                />
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
