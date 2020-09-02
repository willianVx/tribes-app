import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedTrue } from '../components/loginForm/LoginFormSlice';
import { setUserData } from '../components/users/UsersSlice';
import { SetLocalStorage } from './localStorage';

const useTryToLoggin = () => {
  const [isLogged, setIsLogged] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
        if (isLogged.login) {
            dispatch(setLoggedTrue({token: isLogged.data.token}));
            dispatch(setUserData(isLogged.data));
            SetLocalStorage(isLogged.data.token, isLogged.data.email);
            return;
        }
        return;
    }
    setIsLogged(false);
  }, [isLogged, dispatch]);

  return [isLogged, setIsLogged];
}

export default useTryToLoggin;
