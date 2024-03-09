import cls from './GroupCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useState } from 'react';
import { Group } from 'shared/api/fetchGroups';
import { GroupFriendsList } from 'entities/GroupCard';
import { Modal } from 'shared/ui/Modal/Modal';

type friendsListCoordinateType = 'x' | 'y'; // для модалки

export interface GroupCardProps extends Group {
    className?: string
}

/*
*  изначально я не до конца понял суть появления блока при клике на друзей
*  и сделал небольшое модальное окно при клике, но потом решил просто показывать блок
*  с друзьями. Оба варианта реализации есть в коде ниже. Тернарник на появления модалки закомментирован в return.
*/

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

	// для модалки
	const [
		friendsListPosition, setFriendsListPosition
	] = useState<Record<friendsListCoordinateType, number>>({ x: 0, y: 0 });

	const onFriendsListOpen = (e: React.MouseEvent) => {
		setFriendsListPosition({ x: e.pageX, y: e.pageY }); // для модалки
		setIsFriendsListOpen(true);
	};

	// для модалки
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

			<div className={cls.wrapper}>
				<div className={cls.name}>{name}</div>
				<div className={cls.status}>{closed ? 'Закрытая' : 'Открытая'}</div>
				<div className={cls.memberCount}>Участников: {members_count}</div>
				{
					friends ?
						<div onClick={(e) => onFriendsListOpen(e)} className={cls.friends}>
							Друзей: {friends.length}
						</div>
						: null
				}
			</div>

			{/* вариант с появлением небольшого модального окна возле места клика на друзей */}
			{/*{
				isFriendsListOpen ?
					<Modal
						positionX={friendsListPosition.x}
						positionY={friendsListPosition.y}
						onClose={onFriendsListClose}
					>
						<GroupFriendsList friends={friends}/>
					</Modal>
					: null
			}*/}

			{/* если кто-то захочет протестировать модальное окно, то заккоментировать этот тернаник
				 и убрать комментарий сверху */}
			{
				isFriendsListOpen ?
					<GroupFriendsList friends={friends}/>
					: null
			}

		</div>
	);
};
