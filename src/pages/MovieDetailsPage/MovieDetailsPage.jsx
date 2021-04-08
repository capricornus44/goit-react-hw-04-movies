import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import movieDbApi from '../../services/MovieDbApi';

import scss from './MovieDetailsPage.module.scss';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
    poster_path: null,
    id: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    movieDbApi
      .fetchMovieDetails(movieId)
      .then(data => this.setState({ ...data }));
  }

  render() {
    const {
      genres,
      release_date,
      overview,
      poster_path,
      title,
      vote_average,
    } = this.state;

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const voteAverage = vote_average * 10;

    return (
      <section>
        <div>
          <div>
            <img
              src={`${imageBaseUrl}${poster_path}`}
              alt={title}
              width="300"
            />
          </div>
          <div>
            <h1>
              {title}
              <span>{release_date}</span>
            </h1>

            <p>
              User Score:
              <span>{voteAverage}%</span>
            </p>

            <h2>
              Overview
              <p>{overview}</p>
            </h2>

            {/* <h2>
              Genres
              <p>{genres}</p>
            </h2> */}
          </div>
        </div>

        <div>
          <h3>Additional information</h3>

          <ul>
            <li>
              <NavLink to="/movies/movieId/cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="/movies/movieId/reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>

        <Route path="/movies/:movieId/cast" component={Cast}></Route>
        <Route path="/movies/:movieId/reviews" component={Reviews}></Route>
      </section>
    );
  }
}

export default MovieDetailsPage;
