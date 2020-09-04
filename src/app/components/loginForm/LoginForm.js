import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formValidation from '../../helpers/formValidation';
import FormContainer from '../FormContainer';

const RenderInput = ({input, type, meta}) =>  (
        <div>
            <input {...input} type={type} />
            <span>{meta.touched && meta.error}</span>
        </div>
);

const LoginForm = ({ handleSubmit, valid }) => {
    return (
        <FormContainer onSubmit={handleSubmit}>
            <label>Email
                <Field type='email' component={RenderInput} name='email' validate={formValidation.email} /><br />
            </label>
            <label>Senha
                <Field type='password' component={RenderInput} name='password' validate={formValidation.password} /><br />
            </label>
            <button disabled={!valid} type='submit'>Login</button>
        </FormContainer>
    );
}

const ReduxLoginForm = reduxForm({
    form: 'loginForm',
})(LoginForm);

export default ReduxLoginForm;
