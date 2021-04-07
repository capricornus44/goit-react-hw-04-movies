import { Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';

import './App.module.scss';

const App = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>

    <Route exact path="/" component={HomePage}></Route>
    <Route path="/movies" component={MoviesPage}></Route>
    <Route path="/movies/:movieId" component={MovieDetailsPage}></Route>
    <Route path="/movies/:movieId/cast" component={Cast}></Route>
    <Route path="/movies/:movieId/reviews" component={Reviews}></Route>
  </>
);

export default App;
