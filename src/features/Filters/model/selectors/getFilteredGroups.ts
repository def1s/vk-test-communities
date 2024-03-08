import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';


export const getFilteredGroups = createSelector(
	(state: StateSchema) => state.groups.groups,
	(state: StateSchema) => state.filters.currentFilters,
	(groups, currentFilters) => {
		const { closed, avatarColor, hasFriends } = currentFilters;
		return groups.filter(group => {
			let passFilter = true;

			if (closed !== null) {
				passFilter = group.closed === closed;
			}

			if (avatarColor !== null) {
				passFilter = passFilter && (group.avatar_color === avatarColor || avatarColor === 'any');
			}

			if (hasFriends != null) {
				if (hasFriends) {
					passFilter = passFilter && (group.friends && group.friends.length > 0);
				} else {
					passFilter = passFilter && !group.friends;
				}
			}

			return passFilter;
		});
	}
);
