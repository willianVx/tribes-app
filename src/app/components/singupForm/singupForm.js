import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formValidation from '../../helpers/formValidation';
import FormContainer from '../FormContainer';
import ButtonsContainerUp from './singupForm.style.js';

const RenderInput = ({input, type, meta}) =>  (
    <div>
        <input {...input} type={type} />
        <span>{meta.touched && meta.error}</span>
    </div>
);

const SingupForm = ({ handleSubmit, valid }) => {
    return (
        <FormContainer onSubmit={handleSubmit}>
            <label>Nome
                <Field type='text' component={RenderInput} name='name' validate={formValidation.name} />
            </label>
            <label>Sobrenome
                <Field type='text' component={RenderInput} name='surName' validate={formValidation.name} />
            </label>
            <label>Username
                <Field type='text' component={RenderInput} name='username' validate={formValidation.name} />
            </label>
            <label>Email
                <Field type='email' component={RenderInput} name='email' validate={formValidation.email} />
            </label>
            <label>Senha
                <Field type='password' component={RenderInput} name='password' validate={formValidation.password} />
            </label>
            <label>Digite a senha novamente
                <Field type='password' component={RenderInput} name='password2' validate={formValidation.password} />
            </label>
            <ButtonsContainerUp>
                <button disabled={!valid} type='submit' >cadastrar</button>
            </ButtonsContainerUp>
        </FormContainer>
    );
}

const SingupFormRedux = reduxForm({
    form: 'signupForm'
})(SingupForm)

export default SingupFormRedux;
