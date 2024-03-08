import groupsData from './groups.json';

interface GetGroupsResponse {
	result: 1 | 0,
	data?: Group[]
}

export interface Group {
	'id': number,
	'name': string,
	'closed': boolean,
	'avatar_color'?: string,
	'members_count': number,
	'friends'?: User[]
}

export interface User {
	'first_name': string,
	'last_name': string
}

const delay = async (ms: number) => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

const fetchGroups = async (): Promise<GetGroupsResponse> => {
	await delay(1000);

	// можно регулировать исход симуляции фетча
	const isSuccess = Math.random() < 0.7;
	const isTotalError = Math.random() > 0.9;
	if (isSuccess) {
		return {
			result: 1,
			data: groupsData
		};
	} else if (isTotalError) {
		throw new Error('Fetch error');
	} else {
		return {
			result: 0
		};
	}
};

export { fetchGroups };
