import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Modal from 'react-modal';
import { LiaTimesSolid } from 'react-icons/lia';
import VoucherUi from '../UiModal/Voucher/UiVoucher';
import PaymentUi from '../UiModal/Payment/PaymentUi';
import DeliverUi from '../UiModal/Deliver/DeliverUi';


Modal.setAppElement('#root');
const cx = classNames.bind(styles)
const ModalVoucher = ({id, open, setOpen, data, voucher, payment, deliver,shop}) => {

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

                {voucher && <VoucherUi setOpen={setOpen} data={data} shop={shop} id={id}/>}
                {payment && <PaymentUi setOpen={setOpen} data={data} />}
                {deliver && <DeliverUi setOpen={setOpen} data={data} />}
            </div>
        </Modal>
    );
}

export default ModalVoucher