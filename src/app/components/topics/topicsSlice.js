import { createSlice } from '@reduxjs/toolkit';

export const TopicList = createSlice({
    name: 'topics',
    initialState: {
       list: [],
       subsTopicIds: []
    },
    reducers: {
        setTopicList: (state, action) => {
            state.list.push(action.payload);
        },
        setSubsList: (state, action) => {
            state.subsTopicIds.push(action.payload);
        },
        updateSubList: (state, action) => {
            state.subsTopicIds.push(action.payload)
        }
    }
});

export const { setTopicList, setSubsList, updateSubList } = TopicList.actions;

export default TopicList.reducer;
