import { createSlice } from '@reduxjs/toolkit';

export const LoginFormSlice = createSlice({
    name: 'isLoggedData',
    initialState: {
        logged: false,
        token: null
    },
    reducers: {
        setLoggedTrue: (state, action) => {
            const { token } = action.payload;
            state.logged = true;
            state.token = token;
        },
        setLogOut: (state, action) => {
            state.logged = false;
            state.token = null;
        }

    }
});

export const { setLoggedTrue,  setLogOut } = LoginFormSlice.actions;

export default LoginFormSlice.reducer;
