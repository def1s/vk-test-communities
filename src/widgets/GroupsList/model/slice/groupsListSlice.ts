import { createSlice } from '@reduxjs/toolkit';
import { GroupsListSchema } from '../types/groupsListSchema';

const initialState: GroupsListSchema = {
	groupsList: []
};

export const groupsListSlice = createSlice({
	name: 'groupList',
	initialState,
	reducers: {
		setGroupsList: (state, actions) => {
			state.groupsList = actions.payload;
		}
	}
});

export const { actions: groupsListActions } = groupsListSlice;
export const { reducer: groupsListReducer } = groupsListSlice;
