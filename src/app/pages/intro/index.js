import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLoggedTrue } from '../../components/loginForm/LoginFormSlice';

const Intro = () => {
    const userData = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(userData);
        if(userData.id !== null) {
            dispatch(setLoggedTrue({token: userData.token}));
        }

    }, [dispatch, userData]);

    return (
        <section>
            <h1>Qual a sua tribo?</h1>
            <p>Para começar a usar seu perfil, primeiro nos informe sobre o que você curte.</p>
            <Link to="/selecao">next</Link>
        </section>
    );
}

export default Intro;
