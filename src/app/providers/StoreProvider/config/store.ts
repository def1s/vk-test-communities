import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { groupsListReducer } from 'widgets/GroupsList';


export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			groups: groupsListReducer
		},
		devTools: __IS_DEV__,
		preloadedState: initialState
	});
}
