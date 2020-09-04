import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReduxLoginForm from '../../components/loginForm/LoginForm';
import loginCheck from '../../helpers/auth';
import useTryToLoggin from '../../helpers/useTryToLoggin';
import PresentationContainer, { TextForm } from '../../components/presentationContainer';
import HeaderLogo from '../../components/headerLogo';

const Login = () => {
    const loginForm = useSelector(state => state.form.loginForm);
    const [loginError, setLoginError] = useState(false);
    const [loginConfirmed, setLoginConfirmed] = useState(false);

    const [isLogged, setIsLogged] = useTryToLoggin();

    const tryToLogin = (result) => {
        console.log(result);
        setIsLogged(result);
    }

    const onSubmit = event => {
        event.preventDefault();
        if (loginForm.values) {
            loginCheck(loginForm.values, tryToLogin);
        }
    };

    useEffect(() => {
        if(isLogged.login !== undefined && !isLogged.login) {
            setLoginError(true);
            return;
        }
        if(isLogged.login) {
            setLoginConfirmed(true);
        }
    }, [isLogged]);

    return (
        <PresentationContainer backgroundImage={'./img/rectangle.jpg'}>
            <HeaderLogo>
                <img src='./img/logo.png' alt='logo tribes' />
                <h1>tribes</h1>
            </HeaderLogo>
            <ReduxLoginForm handleSubmit={onSubmit} />
            {loginError && <span>Não foi possível realizar o login!</span>}
            {loginConfirmed && <Redirect to='/intro' />}
            <TextForm>Ainda não possui uma conta? <Link to='/cadastro'>Cadastra-se</Link></TextForm>
        </PresentationContainer>
    );
}

export default Login;
