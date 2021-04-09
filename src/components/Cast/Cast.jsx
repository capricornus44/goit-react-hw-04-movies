import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movieDbApi from '../../services/MovieDbApi';

import scss from './Cast.module.scss';

class Cast extends Component {
  state = {
    actorsList: [],
  };

  componentDidMount() {
    movieDbApi
      .fetchCast(this.props.id)
      .then(cast => this.setState({ actorsList: cast }));
  }
  render() {
    // const imageBaseUrl = 'https://image.tmdb.org/t/p/w185';
    const { actorsList } = this.state;
    const isShowCast = actorsList.length > 0;

    return (
      <>
        {isShowCast && (
          <ul className={scss.list}>
            {actorsList.map(actor => (
              <li key={actor.id} className={scss.item}>
                <div className={scss.posterBox}>
                  <img
                    src={
                      actor.profile_path
                        ? `http://image.tmdb.org/t/p/w200/${actor.profile_path}`
                        : `https://image.freepik.com/free-vector/glitch-error-404-page-background_23-2148086227.jpg`
                    }
                    alt={`Actor: ${actor.name}`}
                    className={scss.poster}
                    width={200}
                  />
                </div>
                <h3 className={scss.actor}>{actor.name}</h3>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

Cast.propTypes = {
  actorsList: PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }),
  ).isRequired,
};

export default Cast;
