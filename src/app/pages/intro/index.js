import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setLoggedTrue } from '../../components/loginForm/LoginFormSlice';
import { GetLocalStorage } from '../../helpers/localStorage';
import loginCheck from '../../helpers/auth';
import useTryToLoggin from '../../helpers/useTryToLoggin';

const Intro = () => {
    const userData = useSelector(state => state.users);
    const loginForm = useSelector(state => state.loginForm);
    const [ redirectRule, setRedirectRule ] = useState(false);

    const [ , setIsLogged] = useTryToLoggin();

    const credentials = GetLocalStorage();

    const dispatch = useDispatch();

    useEffect(() => {
        const tryTologin = (result) => {
            if(result.login) {
                setIsLogged(result);
                return;
            }
            setRedirectRule(true);
        }

        if (!credentials) {
            setRedirectRule(true);
            return;
        };

        if (!loginForm.logged) {
            console.log('try to login', credentials);
            loginCheck(credentials, tryTologin)
        }

    }, [credentials, loginForm.logged, setIsLogged]);

    useEffect(() => {
        console.log(userData);
        if(userData.id !== null) {
            dispatch(setLoggedTrue({token: userData.token}));
        }
    }, [dispatch, userData]);

    if (redirectRule) {
        return <Redirect to="/" />
    }

    return (
        <section>
            <h1>Qual a sua tribo?</h1>
            <p>Para começar a usar seu perfil, primeiro nos informe sobre o que você curte.</p>
            <Link to="/selecao">next</Link>
        </section>
    );
}

export default Intro;
