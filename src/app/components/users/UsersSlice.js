import { createSlice } from '@reduxjs/toolkit';

export const UsersSlice = createSlice({
    name: 'userData',
    initialState: {
        id: null,
        name: null,
        surName: null,
        image: null,
        color: null,
        email: null,
        password: null,
        password2: null,
        token: null,
        facebookID: null,
        hasInicialized: false,
        topics: []
    },
    reducers: {
        setUserData: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.surName = action.payload.surName;
            state.image = action.payload.image;
            state.color = action.payload.color;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.password2 = action.payload.password2;
            state.token = action.payload.token;
            state.facebookID = action.payload.facebookID;
            state.hasInicialized = action.payload.hasInicialized;
            state.topics = action.payload.topics;
        },
        setTopicsUserData: (state, action) => {
            state.topics = action.payload.topics;
        }

    }
});

export const { setUserData } = UsersSlice.actions;

export default UsersSlice.reducer;
