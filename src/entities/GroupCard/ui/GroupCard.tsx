import cls from './GroupCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import { Group } from 'shared/api/fetchGroups';

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
					<div className={cls.friends}>Друзей: {friends.length}</div>
					: null
			}
			<div>{members_count}</div>
		</div>
	);
};
