import { StateSchema } from 'app/providers/StoreProvider';


export const getGroupsList = (state: StateSchema) => state.groups.groupsList;
