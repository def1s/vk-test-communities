import cls from './UserEntity.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { User } from 'shared/api/fetchGroups';

export interface UserEntityProps extends User {
	className?: string
}

export const UserEntity: FC<UserEntityProps> = (props) => {
	const { first_name, last_name, className } = props;

	return (
		<div className={classNames(cls.UserEntity, {}, [className])}>
			{first_name} {last_name}
		</div>
	);
};
