import { useDispatch } from 'react-redux';
import { setAuth } from '../../Store/actions';
import './signOutPage.scss';

const SignOutPage = () => {
    const dispatch = useDispatch();
    return (
        <div className='sign-out'>
            <button className='sign-out__btn' onClick={() => dispatch(setAuth(false))}>Выйти</button>
        </div>
    )
}

export default SignOutPage;