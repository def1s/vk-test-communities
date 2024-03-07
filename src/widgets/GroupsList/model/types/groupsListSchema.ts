import { GroupCardProps } from 'entities/GroupCard';
import { UserProps } from 'entities/User';

export interface Group extends GroupCardProps {
	friends?: UserProps[]
}

export interface GroupsListSchema {
	groupsList: Group[]
}
