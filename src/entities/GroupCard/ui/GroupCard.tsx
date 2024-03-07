import cls from './GroupCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';

export interface GroupCardProps {
	id?: number,
	name: string,
	closed: boolean,
	avatar_color?: string,
	members_count: number,
	// friends: React.ReactNode,
    className?: string
}

export const GroupCard: FC<GroupCardProps> = (props) => {
	const {
		name,
		closed,
		avatar_color,
		members_count,
		// friends,
		className
	} = props;

	return (
		<div className={classNames(cls.GroupCard, {}, [className])}>
			<div className={cls.cover} style={{ backgroundColor: avatar_color }}></div>
			<div className={cls.name}>{name}</div>
			<div className={cls.status}>{closed}</div>
			<div className="">{members_count}</div>
			{/*{friends}*/}
		</div>
	);
};
