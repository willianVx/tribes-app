import React from 'react';

const SingupForm = () => {
    return (
        <form action='#'>
            <label>Nome
                <input type='text' name='name' />
            </label>
            <label>Sobrenome
                <input type='text' name='surName' />
            </label>
            <label>Username
                <input type='text' name='username' />
            </label>
            <label>Email
                <input type='email' name='email' />
            </label>
            <label>Senha
                <input type='password' name='password' />
            </label>
            <label>Digite a senha novamente
                <input type='password' name='password' />
            </label>
            <input type='submit' value='cadastrar' />
            <button>Login com facebook</button>
        </form>
    );
}

export default SingupForm;
