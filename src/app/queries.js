const apiEndpoint = 'http://localhost:5000/'

const fetchData = async (resource) => {
    const request = new Request(`${apiEndpoint}${resource}`, {method: 'GET'});
    const response = await fetch(request).then(data => data.json());
    return response;
}

const createData = async (resource, data) => {
    const request = new Request(`${apiEndpoint}${resource}`, {method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify(data)});
    const response = await fetch(request).then(data => data.json());
    return response;
}

const getUserByEmail = (email) => {
    return fetchData(`users/?email=${email}`);
}

const getTopicByID = (id) => {
    console.log(id);
};

const getTopicslist = () => {
    return fetchData(`topics`);
}

const createUser = (data) => {
    const newData = {...data, hasInicialized: false,
        token: "78954312",
        facebookID: "8791654"};
    return createData('users', newData);
}


export { getUserByEmail, getTopicByID, createUser, getTopicslist };
