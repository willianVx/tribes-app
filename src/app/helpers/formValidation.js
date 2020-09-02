const formValidation = {
    name: value => {
        // const invalidNameMsg = 'Por favor, insira um nome válido.';
        const nullNameMsg = 'Campo obrigatório';

        if (!value || value === '') {
            return nullNameMsg;
        }
        return undefined
    },
    email: value => {
        const invalidMailMsg = 'Por favor, insira um email válido.';
        const nullMailMsg = 'Campo obrigatório';

        const regex = /\S+@\S+\.\S+/;
        const isValidEmail = regex.test(value);
        if (!value || value === ' ') {
            return nullMailMsg;
        }
        if (!isValidEmail) {
            return invalidMailMsg;
        }
        return undefined;
    },
    password: value => {
        const nullMailMsg = 'Campo obrigatório';
        const isValidPassMsg = 'A senha deve ter no mínimo 8 caracteres';

        if (!value || value === ' ') {
            return nullMailMsg;
        }

        if (value.length < 8) {
            return isValidPassMsg;
        }
        return undefined;
    }
}

export default formValidation;
