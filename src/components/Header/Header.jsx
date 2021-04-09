import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

import scss from './Header.module.scss';

const Header = () => (
  <header className={scss.pageHeader}>
    <nav className={scss.nav}>
      <ul className={scss.list}>
        <li className={scss.item}>
          <NavLink
            exact
            to={routes.home}
            className={scss.link}
            activeClassName={scss.linkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={scss.item}>
          <NavLink
            exact
            to={routes.movies}
            className={scss.link}
            activeClassName={scss.linkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
