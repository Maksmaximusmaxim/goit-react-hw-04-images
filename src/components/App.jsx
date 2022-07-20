import React from 'react';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from '../components/Modal/Modal';
import { api } from './api';
import { Loader } from './Loader/Loader';
// console.log(api.then(r =>  console.log(r)));
export class App extends React.Component {
  state = {
    photos: '',
    page: 1,
    showModal: false,
    bigImg: '',
    loader: false,
    returnedPhotos: [],
  };

  togleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  inputData = data => {
    console.log(data);
    this.setState({
      photos: data,
      page: 1,
      returnedPhotos: [],
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.photos !== this.state.photos ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        loader: true,
      });
      api(this.state.photos, this.state.page).then(data => {
        this.setState(prevState => ({
          returnedPhotos: prevState.returnedPhotos.concat(data),
          loader: !prevState.loader,
        }));
      });
    }
  }
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  showBigImg = bigImg => {
    this.setState({
      bigImg: bigImg,
    });
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.inputData} />
        {this.state.loader && <Loader />}
        {this.state.returnedPhotos.length > 0 && (
          <>
            <ImageGallery
              inputPhotoTittle={this.state.returnedPhotos}
              onClick={this.showBigImg}
            />
            <Button onClick={this.loadMore} />
          </>
        )}

        {this.state.showModal && (
          <Modal onClose={this.togleModal} bigImg={this.state.bigImg} />
        )}
      </div>
    );
  }
}
