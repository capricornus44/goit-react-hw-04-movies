import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

import scss from './App.module.scss';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/movies" component={MoviesPage}></Route>
      <Route path="/movies/:movieId" component={MovieDetailsPage}></Route>
      <Route component={NotFoundPage}></Route>
    </Switch>
  </>
);

export default App;
