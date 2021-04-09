import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import routes from './routes';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path={routes.home} component={HomePage}></Route>
      <Route exact path={routes.movies} component={MoviesPage}></Route>
      <Route path={routes.movieDetails} component={MovieDetailsPage}></Route>
      <Redirect to={routes.home} />
      <Route component={NotFoundPage}></Route>
    </Switch>
  </>
);

export default App;
