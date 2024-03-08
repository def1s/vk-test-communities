import { createSlice } from '@reduxjs/toolkit';
import { FiltersSchema } from '../types/filtersSchema';

const initialState: FiltersSchema = {
	currentFilters: {
		closed: null,
		avatarColor: null,
		hasFriends: false
	},
	filteredGroups: []
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		// setGroupsList: (state, actions) => {
		// 	state.groups= actions.payload;
		// }
	}
});

export const { actions: filtersActions } = filtersSlice;
export const { reducer: filtersReducer } = filtersSlice;
