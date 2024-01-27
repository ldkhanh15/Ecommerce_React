import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Modal from 'react-modal';
import { LiaTimesSolid } from 'react-icons/lia';

import UiModal from '../UiModal/UiModal';

Modal.setAppElement('#root');
const cx = classNames.bind(styles)
const ModalProduct = ({ open, setOpen, modal }) => {
  
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      className={cx('container')}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 99999999,
        },
        content: {
          zIndex: 9999999,
        },
      }}
    >
      <div className={cx('main')}>
        {
          modal && <div onClick={() => setOpen(false)} className={cx('icon-close')}>
            <LiaTimesSolid />
          </div>
        }
        <UiModal modal={modal}/>
      </div>
    </Modal>
  );
}

export default ModalProduct