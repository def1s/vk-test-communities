import React from 'react';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { Provider } from 'react-redux';

interface StoreProviderProps {
	children?: React.ReactNode,
	initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
	const {
		children,
		initialState
	} = props;

	const store = createReduxStore(initialState);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
