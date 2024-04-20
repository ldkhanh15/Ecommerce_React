import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Modal from 'react-modal';
import { LiaTimesSolid } from 'react-icons/lia';
import UiOrder from '../UiModal/Order/UiOrder';


Modal.setAppElement('#root');
const cx = classNames.bind(styles)
const ModalOrder = ({ open, setOpen, data }) => {
    
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
                <div onClick={() => setOpen(false)} className={cx('icon-close')}>
                    <LiaTimesSolid />
                </div>
                <UiOrder data={data}/>
            </div>
        </Modal>
    );
}

export default ModalOrder