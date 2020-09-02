import { createSlice } from '@reduxjs/toolkit';

export const TopicList = createSlice({
    name: 'userData',
    initialState: {
       list: []
    },
    reducers: {
        setTopicList: (state, action) => {
            state.list.push(action.payload);
        }
    }
});

export const { setTopicList } = TopicList.actions;

export default TopicList.reducer;
