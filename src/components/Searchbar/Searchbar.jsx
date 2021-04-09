import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import scss from './Searchbar.module.scss';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = event => {
    const { value } = event.currentTarget;

    this.setState({
      searchQuery: value,
    });
  };

  handeSubmit = event => {
    event.preventDefault();

    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      toast.error('Enter correct value!');
      return;
    }

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div className={scss.searchbar}>
        <form className={scss.searchForm} onSubmit={this.handeSubmit}>
          <button type="submit" className={scss.searchFormButton}>
            <span className={scss.searchFormButtonLabel}>Search</span>
          </button>

          <input
            type="text"
            className={scss.searchFormInput}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
