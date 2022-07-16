import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import css from '../ImageGallery/ImgGallary.module.css';
export class ImageGallery extends React.Component {
  state = {
    returnedPhotos: null,
    loader: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputPhotoTittle !== this.props.inputPhotoTittle) {
      this.setState({
        loader: true,
      });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.props.inputPhotoTittle.photos}&page=${this.props.inputPhotoTittle.page}&key=27737984-087ff865c77ff0cde11c21156&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(r => this.setState({ returnedPhotos: r.hits }))
          .finally(this.setState({ loader: false }));
      }, 500);
    }
  }

  render() {
    return (
      <>
        {this.state.loader && <Loader />}
        <ul className={css.imageGallery}>
          {this.state.returnedPhotos &&
            this.state.returnedPhotos.map(p => (
              <ImageGalleryItem
                key={p.id}
                webformatURL={p.webformatURL}
                largeImageURL={p.largeImageURL}
                tags={p.tags}
                onClick={this.props.onClick}
              />
            ))}
        </ul>
      </>
    );
  }
}
