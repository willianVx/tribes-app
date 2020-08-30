import React from 'react';

const LoginForm = () => {
    return (
        <form action='#'>
            <label>Email:
                <input type='email' name='email' /><br />
            </label>
            <label>Senha:
                <input type='password' name='password' /><br />
            </label>
            <input type='submit' value='login' />
        </form>
    );
}

export default LoginForm;
