import cls from './GroupCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useEffect, useState } from 'react';
import { Group } from 'shared/api/fetchGroups';
import { GroupFriendsList } from '../GroupFriendsList/GroupFriendsList';
import Plug from 'shared/assets/not_found.svg';

export interface GroupCardProps extends Group {
    className?: string
}

// карточка группы
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

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (target.closest(`.${cls.friends}`)) {
				return;
			}
			setIsFriendsListOpen(false);
		};

		document.addEventListener(('click'), handleClickOutside);

		return () => {
			document.removeEventListener(('click'), handleClickOutside);
		};
	}, []);

	const onFriendsListOpen = () => {
		setIsFriendsListOpen(true);
	};

	return (
		<div className={classNames(cls.GroupCard, {}, [className])}>
			{
				avatar_color ?
					<div className={cls.cover} style={{ backgroundColor: avatar_color }}></div>
					: <Plug className={cls.plug}/>
			}

			<div className={cls.wrapper}>
				<div className={cls.name}>{name}</div>
				<div className={cls.status}>{closed ? 'Закрытая' : 'Открытая'}</div>
				<div className={cls.memberCount}>Участников: {members_count}</div>
				{
					friends &&
						<div onClick={onFriendsListOpen} className={cls.friends}>
							Друзей: {friends.length}
						</div>
				}
			</div>

			{isFriendsListOpen && friends && <GroupFriendsList friends={friends}/>}
		</div>
	);
};
