import cls from './GroupFriendsList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useState } from 'react';
import { User } from 'shared/api/fetchGroups';

interface GroupFriendsListProps {
	friends: User[],
    className?: string
}

export const GroupFriendsList: FC<GroupFriendsListProps> = (props) => {
	const { friends, className } = props;
	const [showAll, setShowAll] = useState(false);

	// событие всплывает от этого блока и закрывает модалку
	// предотвращаем всплытие
	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const renderFriendsList = () => {
		const friendsToRender = showAll ? friends : friends.slice(0, 5);

		return friendsToRender.map((friend, index) => {
			return <div key={index}>{friend.first_name} {friend.last_name}</div>;
		});
	};

	const friendsList = renderFriendsList();

	return (
		<div
			className={classNames(cls.GroupFriendsList, {}, [className])}
			onClick={handleClick}
		>
			{friendsList}
			{friends.length > 5 && !showAll && (
				<div
					onClick={() => setShowAll(true)}
					className={cls.showAll}
				>
					Показать всех
				</div>
			)}
		</div>
	);
};
