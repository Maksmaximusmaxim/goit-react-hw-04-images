import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import css from '../Searchbar/Searchbar.module.css';
export function Searchbar({ onSubmitReturnData }) {
  const [photoTittle, setphotoTittle] = useState('');

  const reset = () => {
    setphotoTittle('');
  };

  const onSubmit = e => {
    e.preventDefault();
    if (photoTittle.trim() === '') {
      return Notiflix.Notify.info('Введите что нибудь');
    }
    reset();
    onSubmitReturnData(photoTittle);
  };
  const onChange = e => {
    setphotoTittle(e.target.value);
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={onSubmit} className={css.SearchForm}>
        <button type="submit" className={css.searchFormbutton}>
          <span>поиск</span>
        </button>

        <input
          className={css.searchForminput}
          onChange={onChange}
          value={photoTittle}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmitb: PropTypes.func,
};
