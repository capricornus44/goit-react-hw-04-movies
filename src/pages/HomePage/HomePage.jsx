import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class HomePage extends Component {
  state = {
    trendMoviesList: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=989c90c59500ad26e3fa4e26d53d2bd3',
    );

    this.setState({
      trendMoviesList: response.data.results,
    });
  }

  render() {
    // console.log(this.props.match.url);
    return (
      <>
        <h1>Home page</h1>

        <ul>
          {this.state.trendMoviesList.map(trendMovie => (
            <li key={trendMovie.id}>
              <Link to={`${this.props.match.url}movies/${trendMovie.id}`}>
                {trendMovie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;

// https://developers.themoviedb.org/3/trending/get-trending

//https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>
