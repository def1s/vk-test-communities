import { GroupsSchema } from 'entities/GroupCard';
import { FiltersSchema } from 'features/Filters';

export interface StateSchema {
	groups: GroupsSchema,
	filters: FiltersSchema
}
