const storage = localStorage;

export const GetLocalStorage = () => {
    const token = storage.getItem('tribesAppToken');
    const email = storage.getItem('tribesAppUserEmail');

    if (!token || !email) return false;

    return { token, email }
}

export const SetLocalStorage = (token, userEmail) => {
    storage.setItem('tribesAppToken', token);
    storage.setItem('tribesAppUserEmail', userEmail);
}

export const CleanLocalStorage = () => {
    console.log('clean local storage');
}
