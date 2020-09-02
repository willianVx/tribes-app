import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formValidation from '../../helpers/formValidation';

const RenderInput = ({input, meta}) =>  (
        <div>
            <input {...input} />
            <span>{meta.touched && meta.error}</span>
        </div>
);

const LoginForm = ({ handleSubmit, valid }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>Email:
                <Field type='email' component={RenderInput} name='email' validate={formValidation.email} /><br />
            </label>
            <label>Senha:
                <Field type='password' component={RenderInput} name='password' validate={formValidation.password} /><br />
            </label>
            <button disabled={!valid} type='submit'>Login</button>
        </form>
    );
}

const ReduxLoginForm = reduxForm({
    form: 'loginForm',
})(LoginForm);

export default ReduxLoginForm;
