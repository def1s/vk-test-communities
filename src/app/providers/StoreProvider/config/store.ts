import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { groupsReducer } from 'entities/GroupCard';
import { filtersReducer } from 'features/Filters';

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			groups: groupsReducer,
			filters: filtersReducer
		},
		devTools: __IS_DEV__,
		preloadedState: initialState
	});
}
