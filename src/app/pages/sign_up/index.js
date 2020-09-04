import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../../queries';

import { setUserData } from '../../components/users/UsersSlice';
import SingupFormRedux from '../../components/singupForm/singupForm';

import PresentationContainer, { TextForm } from '../../components/presentationContainer';
import HeaderLogo from '../../components/headerLogo';


const SingUp = () => {
    const loginForm = useSelector(state => state.form.signupForm);
    const [ createSuccesUser, setCreateSuccesUser ] = useState(false);

    const dispatch = useDispatch();

    const handleAsync = (data, callBack) => {
        callBack(data).then(data => {
            dispatch(setUserData(data));
            setCreateSuccesUser(true);
        });
    }

    const onSubmit = event => {
        event.preventDefault();
        if (loginForm.values) {
            handleAsync(loginForm.values, createUser);
        }
    };

    return (
        <PresentationContainer backgroundImage={'./img/rectangle.jpg'}>
            <HeaderLogo>
                <img src='./img/logo.png' alt='logo tribes' />
                <h1>tribes</h1>
            </HeaderLogo>
            <SingupFormRedux handleSubmit={onSubmit} />
            <TextForm>Já possui uma conta? <Link to='/'>Faça login</Link> </TextForm>
            { createSuccesUser &&  <Redirect to="/intro" />}
        </PresentationContainer>
    );
}

export default SingUp;
