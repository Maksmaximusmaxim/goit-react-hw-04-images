import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import css from '../Searchbar/Searchbar.module.css';
export class Searchbar extends Component {
  state = {
    photoTittle: '',
  };
  static propTypes = {
    onSubmit:PropTypes.func,
  }
  reset = () => {
    this.setState({
      photoTittle: '',
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.photoTittle.trim() === '') {
      return Notiflix.Notify.info('Введите что нибудь');
    }

    this.reset();
    this.props.onSubmit(this.state.photoTittle);
  };
  onChange = e => {
    this.setState({
      photoTittle: e.target.value,
    });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.onSubmit} className={css.SearchForm}>
          <button type="submit" className={css.searchFormbutton}>
            <span>поиск</span>
          </button>

          <input
            className={css.searchForminput}
            onChange={this.onChange}
            value={this.state.photoTittle}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
