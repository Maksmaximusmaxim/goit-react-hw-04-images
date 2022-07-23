import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import css from '../ImageGallery/ImgGallary.module.css';
export const ImageGallery = ({ inputPhotoTittle, onClick }) => {
  const dataRender = inputPhotoTittle;
  console.log(dataRender, 'gg');
  return (
    <>
      <ul className={css.imageGallery}>
        {dataRender &&
          dataRender.map(p => (
            <ImageGalleryItem
              key={p.id}
              webformatURL={p.webformatURL}
              largeImageURL={p.largeImageURL}
              onClick={onClick}
            />
          ))}
      </ul>
    </>
  );
};
ImageGallery.propTypes = {
  inputPhotoTittle: PropTypes.array,
  onClick: PropTypes.func,
};
