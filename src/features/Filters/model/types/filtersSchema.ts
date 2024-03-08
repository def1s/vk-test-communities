import { Group } from 'shared/api/fetchGroups';

export interface filters {
	closed: boolean | null,
	avatarColor: string | null,
	hasFriends?: boolean
}

export interface FiltersSchema {
	currentFilters: filters
	filteredGroups: Group[]
}
