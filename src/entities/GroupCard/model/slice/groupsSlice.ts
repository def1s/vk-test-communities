import { createSlice } from '@reduxjs/toolkit';
import { GroupsSchema } from '../types/groupsSchema';

const initialState: GroupsSchema = {
	groups: []
};

export const groupsSlice = createSlice({
	name: 'groups',
	initialState,
	reducers: {
		setGroupsList: (state, actions) => {
			state.groups= actions.payload;
		}
	}
});

export const { actions: groupsActions } = groupsSlice;
export const { reducer: groupsReducer } = groupsSlice;
