import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import routes from './routes';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));

const App = () => (
  <>
    <Header />
    <Suspense fallback={<h1 className="loading">Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage}></Route>
        <Route exact path={routes.movies} component={MoviesPage}></Route>
        <Route path={routes.movieDetails} component={MovieDetailsPage}></Route>
        <Redirect to={routes.home} />
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Suspense>
  </>
);

export default App;
