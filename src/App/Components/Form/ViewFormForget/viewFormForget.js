import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import getNumber from '../../../utils/getNumber';
import { setFlagModal, setForget, setForgetLogin } from '../../../Store/actions';
import './viewFormForget.scss';

const ViewFormForget = () => {
    const user = useSelector(state => state.user);
    const [login,setLogin] = useState('');
    const [messageLogin,setMessageLogin] = useState('');
    const dispatch = useDispatch();

    const handleValue = (e) => {
        setLogin(e.target.value)
    }

    const checkValidate = (e) => {
        e.preventDefault();
        const tel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

         if(tel.test(login) === false) {
            setMessageLogin('Неверный формат!');
        } else {
            setMessageLogin('');
            if(getNumber(login) === getNumber(user.login)) {
                dispatch(setForgetLogin(login));
                dispatch(setFlagModal(true));
                setMessageLogin('');
            } else {
                setMessageLogin('Вы не зарегистрированны в системе!');
            }
        }
    }

    return (
        <form>
             <h3 className='form__forget__title'>Восстановление пароля</h3>
            <div className='form__item'>
                <label for='tel' className='form__item__label'>Введите номер телефона</label>
                <input type='tel' id='tel' className='form__item__input' onChange={(e) => handleValue(e)}/>
                <span>{messageLogin}</span>
            </div>
            <p className='form__forget' onClick={() => dispatch(setForget(false))}>назад</p>
            <button className='form__button' onClick={(e) => checkValidate(e)}>ПОЗВОНИТЬ</button>
        </form>
    )
}

export default ViewFormForget;