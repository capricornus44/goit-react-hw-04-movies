import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
import routes from './routes';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));

const App = () => (
  <>
    <Header />
    <Suspense
      fallback={
        <Loader
          className="spinner"
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      }
    >
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
