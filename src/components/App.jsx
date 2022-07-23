import { useState, useEffect } from 'react';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from '../components/Modal/Modal';
import { api } from './api';
import { Loader } from './Loader/Loader';

export function App() {
  const [photos, setPhotos] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [bigImg, setBigImg] = useState('');
  const [loader, setLoader] = useState(false);
  const [returnedPhotos, setReturnedPhotos] = useState([]);

  const togleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const inputData = data => {
    console.log(data);
    setPhotos(data);
    setPage(1);
    setReturnedPhotos([]);
  };
  useEffect(() => {
    if (photos === '') {
      return;
    }
    setLoader(prevState => !prevState);
    api(photos, page).then(data => {
      setReturnedPhotos(prevState => prevState.concat(data));
      setLoader(prevState => !prevState);
    });
  }, [photos, page]);
  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.photos !== this.state.photos ||
  //     prevState.page !== this.state.page
  //   ) {

  //     api(this.state.photos, this.state.page).then(data => {
  //       this.setState(prevState => ({
  //         returnedPhotos: prevState.returnedPhotos.concat(data),
  //         loader: !prevState.loader,
  //       }));
  //     });

  //   }
  // }
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };
  const showBigImg = bigImg => {
    setBigImg(bigImg);
    setShowModal(prevState => !prevState);
  };

  return (
    <div>
      <Searchbar onSubmitReturnData={inputData} />

      {returnedPhotos.length > 0 ? (
        <>
          <ImageGallery
            inputPhotoTittle={returnedPhotos}
            onClick={showBigImg}
          />
          {loader && <Loader />}
          <Button onClick={loadMore} />
        </>
      ) : (
        <div>Здесь ,пока что, ничего нет. Введите запрос(🦆🐁🦝🐇)</div>
      )}

      {showModal && <Modal onClose={togleModal} bigImg={bigImg} />}
    </div>
  );
}
