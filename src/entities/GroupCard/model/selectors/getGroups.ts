import { StateSchema } from 'app/providers/StoreProvider';

export const getGroups = (state: StateSchema) => state.groups.groups;
