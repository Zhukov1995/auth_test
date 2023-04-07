import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, setForget } from '../../../Store/actions';
import getNumber from '../../../utils/getNumber';
import './viewFormSignIn.scss';

const ViewFormSignIn = () => {
    const user = useSelector(state => state.user);
    const forgetLogin = useSelector(state => state.forgetLogin);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [messageLogin, setMessageLogin] = useState('');
    const [messagePassword, setMessagePassword] = useState('');
    const dispatch = useDispatch();

    const handleValue = (e, setFunc) => {
        setFunc(e.target.value)
    }

    useEffect(() => {
        if(forgetLogin !== "") {
            setLogin(forgetLogin);
        }
    }, [])

    const checkValidate = (e) => {
        e.preventDefault();
        const tel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

        if(tel.test(login) === false) {
            setMessageLogin('Неверный формат!');
        } else {
            setMessageLogin('');
            if(getNumber(login) === getNumber(user.login) && password === user.password) {
                dispatch(setAuth(true))
                setMessageLogin('');
                setMessagePassword('');
            }
            if(getNumber(login) !== getNumber(user.login)) {
                setMessageLogin('Неверный номер!')
                dispatch(setAuth(false))
            } 
            if(password !== user.password) {
                setMessagePassword('Неверный пароль!')
                dispatch(setAuth(false))
            }
        }
    }

    return (
        <form>
            <div className='form__item'>
                <label for='login' className='form__item__label'>Введите логин</label>
                <input type='text' id='login' className='form__item__input' value={login} onChange={(e) => handleValue(e, setLogin)}/>
                <span className='form__item__message'>{messageLogin}</span>
            </div>
            <div className='form__item'>
                <label for='password' className='form__item__label'>Введите пароль</label>
                <input type='password' id='password' className='form__item__input' onChange={(e) => handleValue(e, setPassword)}/>
                <span className='form__item__message'>{messagePassword}</span>
            </div>
            <p className='form__forget' onClick={() => dispatch(setForget(true))}>Забыли пароль?</p>
            <button className='form__button' onClick={(e) => checkValidate(e)}>ВОЙТИ</button>
        </form>
    )
}

export default ViewFormSignIn;