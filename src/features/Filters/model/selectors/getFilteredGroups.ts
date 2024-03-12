import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Group } from 'shared/api/fetchGroups';


export const getFilteredGroups = createSelector(
	(state: StateSchema) => state.groups.groups,
	(state: StateSchema) => state.filters.currentFilters,
	(groups, currentFilters) => {
		const { closed, avatarColor, hasFriends } = currentFilters;
		// каждый фильтр - это функция, которая возвращает true или false, можно легко добавить новые фильтры или убрать старые
		const filters = [
			(group: Group) => closed === null || group.closed === closed,
			(group: Group) => avatarColor === null || group.avatar_color === avatarColor || avatarColor === 'any',
			(group: Group) => hasFriends === null || (hasFriends ? group.friends && group.friends.length > 0 : !group.friends)
		];

		return groups.filter(group => filters.every(filter => filter(group)));
	}
);
