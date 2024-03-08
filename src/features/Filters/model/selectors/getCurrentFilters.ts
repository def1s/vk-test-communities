import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrentFilters = (state: StateSchema) => state.filters.currentFilters;
