import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import routes from '../../routes';

import scss from './MoviesList.module.scss';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={scss.list}>
      {movies.map(movie => (
        <li className={scss.item} key={movie.id}>
          <NavLink
            className={scss.link}
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: location,
            }}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default withRouter(MoviesList);
