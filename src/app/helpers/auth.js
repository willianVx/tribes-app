import { getUserByEmail } from '../queries';

const validateUser = (user, data) => {
    if(user.email === data.email && user.password === data.password) {
        return true;
    }
    return false;
}

const loginCheck = (user, callback) => {
    getUserByEmail(user.email).then(data => {
        if (!data.length) {
            callback({login: false})
        }
        if(validateUser(user, data[0])) {
            callback({data: data[0], login: true});
            return;
        }
        callback({login: false});

    });
}

export default loginCheck;
