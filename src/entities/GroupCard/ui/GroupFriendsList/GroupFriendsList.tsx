import cls from './GroupFriendsList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { User } from 'shared/api/fetchGroups';

interface GroupFriendsListProps {
	friends: User[],
    className?: string
}

export const GroupFriendsList: FC<GroupFriendsListProps> = (props) => {
	const { friends, className } = props;

	const renderFriendsList = () => {
		return friends.map((friend, index) => {
			return <div key={index}>{friend.first_name} {friend.last_name}</div>;
		});
	};

	return (
		<div
			className={classNames(cls.GroupFriendsList, {}, [className])}
		>
			{ renderFriendsList() }
		</div>
	);
};
