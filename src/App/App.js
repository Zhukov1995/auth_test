import { useSelector } from 'react-redux';
import SignInPage from './Pages/SignInPage/signInPage';
import SignOutPage from './Pages/SignOutPage/signOutPage';
import './App.css';

function App() {
  const auth = useSelector(state => state.auth);
  return (
    <div className="App">
      {!auth ?
        <SignInPage/>
        :
        <SignOutPage/>
      }
    </div>
  );
}

export default App;
