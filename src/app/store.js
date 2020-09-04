import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import LoginFormReduce from './components/loginForm/LoginFormSlice';
import usersReducer from './components/users/UsersSlice';
import topicsReducer from './components/topics/topicsSlice';


export default configureStore({
  reducer: {
    loginForm: LoginFormReduce,
    form: formReducer,
    users: usersReducer,
    topics: topicsReducer,
  },
});
