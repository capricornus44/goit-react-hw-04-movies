import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
// import Cast from '../../components/Cast';
// import Reviews from '../../components/Reviews';
import movieDbApi from '../../services/MovieDbApi';

import routes from '../../routes';
import scss from './MovieDetailsPage.module.scss';

const Cast = lazy(() => import('../../components/Cast'));
const Reviews = lazy(() => import('../../components/Reviews'));

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
      .then(data => this.setState({ ...data }))
      .catch(error => console.log(error));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push('/');

    // history.push(location?.state?.from || routes.movies);

    // if (Location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }

    // history.push(routes.movies);
  };

  render() {
    const { genres, overview, poster_path, title, vote_average } = this.state;

    const voteAverage = vote_average * 10;

    return (
      <>
        <button
          type="button"
          className={scss.button}
          onClick={this.handleGoBack}
        >
          Go back
        </button>

        <section className={scss.movieDetails}>
          <div className={scss.movieCard}>
            <div className={scss.posterBox}>
              <img
                src={
                  poster_path &&
                  `https://image.tmdb.org/t/p/w300/${poster_path}`
                }
                alt={`${title} poster`}
                className={scss.poster}
              />
            </div>
            <div className={scss.movieDesc}>
              <h1 className={scss.title}>{title}</h1>

              <p className={scss.scoreTitle}>
                User Score:
                <span className={scss.scoreNum}>{voteAverage}%</span>
              </p>

              <h2 className={scss.overviewTitle}>
                Overview
                <p className={scss.overviewText}>{overview}</p>
              </h2>

              <h2 className={scss.genresTitle}>Genres</h2>
              {genres.map(genre => (
                <span key={genre.id} className={scss.genresText}>
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <div className={scss.addBox}>
            <h3 className={scss.addBoxTitle}>Additional information</h3>

            <ul className={scss.addBoxList}>
              <li className={scss.addBoxItem}>
                <NavLink
                  to={`${this.props.match.url}/cast`}
                  className={scss.addBoxLink}
                >
                  Cast
                </NavLink>
              </li>
              <li className={scss.addBoxItem}>
                <NavLink
                  to={`${this.props.match.url}/reviews`}
                  className={scss.addBoxLink}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <Route path={`${this.props.match.url}/cast`} component={Cast} /> */}
          {/* <Route path={`${this.props.match.url}/reviews`} component={Reviews} /> */}

          <Suspense fallback={<h1 lassName="loading">Loadind...</h1>}>
            <Switch>
              <Route
                path={`${this.props.match.url}/cast`}
                render={props => (
                  <Cast {...props} id={this.props.match.params.movieId} />
                )}
              />
              <Route
                path={`${this.props.match.url}/reviews`}
                render={props => (
                  <Reviews {...props} id={this.props.match.params.movieId} />
                )}
              />
            </Switch>
          </Suspense>
        </section>
      </>
    );
  }
}

export default MovieDetailsPage;
