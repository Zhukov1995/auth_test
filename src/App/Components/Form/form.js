import ViewFormForget from './ViewFormForget/viewFormForget';
import ViewFormSignIn from './ViewFormSignIn/viewFormSignIn';
import Crane from '../../images/crane.png';
import Logo from '../../images/logo.png';
import { useSelector } from 'react-redux';
import './form.scss';

const Form = () => {
    const forget = useSelector(state => state.forget);

    const classForm = forget ? 'form__wrapper rotate' : 'form__wrapper rotate_back';
    return (
        <div className={classForm}>
            <img src={Crane} alt='crane' className='form__wrapper__crane'/>
            <div className='form__subwrapper'>
                <img src={Logo} alt='logo' className='form__subwrapper__logo'/>
                {!forget ? <ViewFormSignIn/> : <ViewFormForget/>}
            </div>
        </div>
    )
}

export default Form;