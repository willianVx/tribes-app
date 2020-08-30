import React from 'react';
import LoginForm from '../../components/loginForm/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section>
            <h1>Tribes</h1>
            <LoginForm />
            <p>Ainda não possui uma conta? <Link to='/cadastro'>Cadastra-se</Link></p>
        </section>
    );
}

export default Login;
