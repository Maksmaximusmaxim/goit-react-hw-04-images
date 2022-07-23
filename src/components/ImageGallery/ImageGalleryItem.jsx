import React from 'react';
import PropTypes from 'prop-types';
import css from '../ImageGallery/imgItem.module.css';
export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemimage}
        src={webformatURL}
        alt="фото"
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func,
};
