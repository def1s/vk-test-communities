import { createSlice } from '@reduxjs/toolkit';
import { FiltersSchema } from '../types/filtersSchema';

const initialState: FiltersSchema = {
	currentFilters: {
		closed: null,
		avatarColor: null,
		hasFriends: null
	},
	filteredGroups: []
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setClosedFilter: (state, actions) => {
			state.currentFilters.closed = actions.payload;
		},
		setAvatarFilter: (state, actions) => {
			state.currentFilters.avatarColor = actions.payload;
		},
		setFriendsFilter: (state, actions) => {
			state.currentFilters.hasFriends = actions.payload;
		}
	}
});

export const { actions: filtersActions } = filtersSlice;
export const { reducer: filtersReducer } = filtersSlice;
