import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movieDbApi from '../../services/MovieDbApi';

import scss from './Reviews.module.scss';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    movieDbApi
      .fetchReviews(this.props.id)
      .then(results => this.setState({ reviews: results }));
  }

  render() {
    const { reviews } = this.state;
    const isShowReviews = reviews.length > 0;

    return (
      <>
        {isShowReviews ? (
          <ul className={scss.list}>
            {reviews.map(review => (
              <li key={review.id} className={scss.item}>
                <h4 className={scss.author}>Author: {review.author}</h4>
                <p className={scss.review}>{review.content}</p>
                <a href={review.url} className={scss.link}>
                  {review.url}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

export default Reviews;
