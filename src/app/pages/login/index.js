import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReduxLoginForm from '../../components/loginForm/LoginForm';
import { setLoggedTrue } from '../../components/loginForm/LoginFormSlice';
import { setUserData } from '../../components/users/UsersSlice';
import loginCheck from '../../helpers/auth';

const Login = () => {
    const loginForm = useSelector(state => state.form.loginForm);
    const [loginError, setLoginError] = useState(false);
    const [loginConfirmed, setLoginConfirmed] = useState(false);

    const dispatch = useDispatch();

    const tryToLogin = (result) => {
        if (result.login) {
            dispatch(setLoggedTrue({token: result.data.token}));
            dispatch(setUserData(result.data));
            setLoginConfirmed(true);
            return;
        }
        setLoginError(true)
    }

    const onSubmit = event => {
        event.preventDefault();
        if (loginForm.values) {
            loginCheck(loginForm.values, tryToLogin);
        }
    };
    return (
        <section>
            <h1>Tribes</h1>
            <ReduxLoginForm handleSubmit={onSubmit} />
            {loginError && <span>Não foi possível realizar o login!</span>}
            {loginConfirmed && <Redirect to='/intro' />}
            <p>Ainda não possui uma conta? <Link to='/cadastro'>Cadastra-se</Link></p>
        </section>
    );
}

export default Login;
