import { Group } from 'shared/api/fetchGroups';

// export enum friendsFilter {
// 	ALL = 'all',
// 	WITH_FRIENDS = 'friends',
// 	WITHOUT_FRIENDS = 'no friends'
// }
//
// export enum closedFilter {
// 	ALL = 'all',
// 	OPEN = 'open',
// 	CLOSED = 'closed'
// }

export interface filters {
	closed?: boolean | null,
	avatarColor?: string | null,
	hasFriends?: boolean | null
}

export interface FiltersSchema {
	currentFilters: filters
	filteredGroups: Group[]
}
