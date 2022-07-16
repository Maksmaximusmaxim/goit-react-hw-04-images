import React from 'react';
import css from '../Button/Button.module.css';
export const Button = ({ onClick }) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      загрузить больше
    </button>
  );
};
