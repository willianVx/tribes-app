import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setLoggedTrue } from '../../components/loginForm/LoginFormSlice';
import { GetLocalStorage } from '../../helpers/localStorage';
import loginCheck from '../../helpers/auth';
import useTryToLoggin from '../../helpers/useTryToLoggin';
import PresentationContainer from '../../components/presentationContainer';
import HeaderLogo from '../../components/headerLogo';
import TextintroContainer, { VerticalAlign, CircleIntro1, CircleIntro2, CircleIntro3, NextBar } from '../../components/textintroContainer';

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
            loginCheck(credentials, tryTologin)
        }

    }, [credentials, loginForm.logged, setIsLogged]);

    useEffect(() => {
        if(userData.id !== null) {
            dispatch(setLoggedTrue({token: userData.token}));
        }
    }, [dispatch, userData]);

    if (redirectRule) {
        return <Redirect to="/" />
    }

    return (
        <PresentationContainer backgroundImage={'./img/rectangle.jpg'}>
            <CircleIntro1 />
            <CircleIntro2 />
            <CircleIntro3 />

            <VerticalAlign>
                <HeaderLogo>
                    <img src='./img/logo.png' alt='logo tribes' />
                </HeaderLogo>
                <TextintroContainer>
                    <h1>Qual a sua tribo?</h1>
                    <p>Para começar a usar seu perfil, primeiro nos informe sobre o que você curte.</p>
                </TextintroContainer>
                <NextBar>
                    <div><span></span> <span></span></div>
                    <Link to="/selecao"> <img src='./img/arrowRight.png' alt='arrowRight' /> </Link>
                </NextBar>
            </VerticalAlign>
        </PresentationContainer>
    );
}

export default Intro;
