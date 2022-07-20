import React from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends React.Component {
  static propTypes = {
    onClose:PropTypes.func,
    bigImg:PropTypes.string,
  }
  componentDidMount() {
    window.addEventListener('keydown', this.onKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeydown);
  }
  onKeydown = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      console.log('жмякнули эскейп');
      this.props.onClose();
    }
  };
  onClick = e => {
    if (e.target === e.currentTarget) {
      console.log('все ок');
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.onClick}>
        <div className={css.Modal}>
          <img src={this.props.bigImg} width="900" alt="картинка" />
        </div>
      </div>,
      modalRoot
    );
  }
}
