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

const editData = async (resource, data) => {
    const request = new Request(`${apiEndpoint}${resource}`, {method: 'PUT', headers: {
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
        facebookID: "8791654",
        image: "./img/users/jessica.png",
        color: "#81C565",
        topics: []
    };
    return createData('users', newData);
}

const EditUser = (data, userdata) => {
    const resource = `users/${userdata.id}`;
    const {topics} = data;
    const newData = {...userdata, topics}
    return editData(resource, newData);
}

const EditTopic = (data, topicsData) => {
    const resource = `topics/${topicsData.id}`;
    const {comments} = data;
    const newData = {...topicsData, comments}
    return editData(resource, newData);
}

const CreateTopic = (data) => {
    const resource = `topics/`;
    return createData(resource, data);
}

const CreateTopicComment = (data) => {
    const resource = `topics/`;
    return editData(resource, data)
}

const createUsersTopicIds = (data) => {
    return createData('userTopicsId', data);
}

export {
    getUserByEmail,
    getTopicByID,
    createUser,
    getTopicslist,
    createUsersTopicIds,
    EditUser,
    CreateTopic,
    CreateTopicComment,
    EditTopic
};
