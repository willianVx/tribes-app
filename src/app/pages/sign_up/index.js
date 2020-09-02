import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../../queries';

import { setUserData } from '../../components/users/UsersSlice';
import SingupFormRedux from '../../components/singupForm/singupForm';

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
        <section>
            <SingupFormRedux handleSubmit={onSubmit} />
            <p>Já possui uma conta? <Link to='/'>Faça login</Link> </p>
            { createSuccesUser &&  <Redirect to="/intro" />}
        </section>
    );
}

export default SingUp;
