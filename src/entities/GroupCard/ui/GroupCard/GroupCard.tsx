import cls from './GroupCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useState } from 'react';
import { Group } from 'shared/api/fetchGroups';
import { GroupFriendsList } from 'entities/GroupCard';
import { Modal } from 'shared/ui/Modal/Modal';

type friendsListCoordinateType = 'x' | 'y';

export interface GroupCardProps extends Group {
    className?: string
}

export const GroupCard: FC<GroupCardProps> = (props) => {
	const {
		name,
		closed,
		avatar_color,
		members_count,
		className,
		friends
	} = props;

	const [isFriendsListOpen, setIsFriendsListOpen] = useState(false);
	const [
		friendsListPosition, setFriendsListPosition
	] = useState<Record<friendsListCoordinateType, number>>({ x: 0, y: 0 });

	const onFriendsListOpen = (e: React.MouseEvent) => {
		setFriendsListPosition({ x: e.pageX, y: e.pageY });
		setIsFriendsListOpen(true);
	};

	const onFriendsListClose = () => {
		setIsFriendsListOpen(false);
		setFriendsListPosition({ x: 0, y: 0 });
	};

	return (
		<div className={classNames(cls.GroupCard, {}, [className])}>
			{/* если данных для поля нет, то его рисовать не нужно - из ТЗ */}
			{
				avatar_color ?
					<div className={cls.cover} style={{ backgroundColor: avatar_color }}></div>
					: null
			}
			<div className={cls.name}>{name}</div>
			<div className={cls.status}>{closed ? 'Закрытая' : 'Открытая'}</div>
			{
				friends ?
					<div onClick={(e) => onFriendsListOpen(e)} className={cls.friends}>
						Друзей: {friends.length}
					</div>
					: null
			}
			{
				isFriendsListOpen ?
					<Modal
						positionX={friendsListPosition.x}
						positionY={friendsListPosition.y}
						onClose={onFriendsListClose}
					>
						<GroupFriendsList friends={friends}/>
					</Modal>
					: null
			}
			<div className={cls.memberCount}>{members_count}</div>
		</div>
	);
};
