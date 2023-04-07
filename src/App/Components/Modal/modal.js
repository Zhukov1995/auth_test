import { useDispatch, useSelector } from 'react-redux';
import Close from './close.svg';
import './modal.scss';
import { setFlagModal, setForget } from '../../Store/actions';

const Modal = () => {
    const flagModal = useSelector(state => state.flagModal);
    const dispatch = useDispatch();

    const classModal = flagModal ? 'modal' : 'modal close';

    const closeModal = () => {
        dispatch(setFlagModal(false));
        dispatch(setForget(false));
    }

    return (
        <div className={classModal}>
            <img src={Close} alt='close' onClick={() => closeModal()}/>
            <h3>Ваш временный пароль</h3>
            <p>123456</p>
        </div>
    )
}

export default Modal;