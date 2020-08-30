import React from 'react';
import { Link } from 'react-router-dom';
import SingupForm from '../../components/singupForm/singupForm';

const SingUp = () => {
    return (
        <section>
            <SingupForm />
            <p>Já possui uma conta? <Link to='/'>Faça login</Link> </p>
        </section>
    );
}

export default SingUp;
