import { useEffect } from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export function Modal({ onClose, bigImg }) {
  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  });

  const onKeydown = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      console.log('жмякнули эскейп');
      onClose();
    }
  };
  const onClick = e => {
    if (e.target === e.currentTarget) {
      console.log('все ок');
      onClose();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={onClick}>
      <div className={css.Modal}>
        <img src={bigImg} width="900" alt="картинка" />
      </div>
    </div>,
    modalRoot
  );
}
Modal.propTypes = {
  onClose: PropTypes.func,
  bigImg: PropTypes.string,
};
