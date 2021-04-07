import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
import NotFoundPage from './pages/NotFoundPage';

import scss from './App.module.scss';

const App = () => (
  <>
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={scss.navLink}
            activeClassName={scss.navLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={scss.navLink}
            activeClassName={scss.navLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/movies" component={MoviesPage}></Route>
      <Route path="/movies/:movieId" component={MovieDetailsPage}></Route>
      <Route path="/movies/:movieId/cast" component={Cast}></Route>
      <Route path="/movies/:movieId/reviews" component={Reviews}></Route>
      <Route component={NotFoundPage}></Route>
    </Switch>
  </>
);

export default App;
