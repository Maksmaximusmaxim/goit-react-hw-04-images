import React from 'react';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from '../components/Modal/Modal';

export class App extends React.Component {
  state = {
    photos: '',
    page: 1,
    showModal: false,
    bigImg: '',
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
    });
  };
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
        <ImageGallery inputPhotoTittle={this.state} onClick={this.showBigImg} />
        <Button onClick={this.loadMore} />
        {this.state.showModal && (
          <Modal onClose={this.togleModal} bigImg={this.state.bigImg} />
        )}
      </div>
    );
  }
}
