import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import css from '../ImageGallery/ImgGallary.module.css';
export class ImageGallery extends React.Component {
  static propTypes = {
    inputPhotoTittle: PropTypes.array,
    onClick: PropTypes.func,
  }
  render() {
    const dataRender = this.props.inputPhotoTittle;
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
                onClick={this.props.onClick}
              />
            ))}
        </ul>
      </>
    );
  }
}
