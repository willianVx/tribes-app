import { createSlice } from '@reduxjs/toolkit';

export const UsersSlice = createSlice({
    name: 'userData',
    initialState: {
        id: null,
        name: null,
        surNmae: null,
        email: null,
        password: null,
        password2: null,
        token: null,
        facebookID: null,
        hasInicialized: false,
    },
    reducers: {
        setUserData: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.surNmae = action.payload.surName;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.password2 = action.payload.password2;
            state.token = action.payload.token;
            state.facebookID = action.payload.facebookID;
            state.hasInicialized = action.payload.hasInicialized;
        }
    }
});

export const { setUserData } = UsersSlice.actions;

export default UsersSlice.reducer;
