import cls from './User.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

export interface UserProps {
	first_name: string,
	last_name: string,
	className?: string
}

export const User: FC<UserProps> = (props) => {
	const { first_name, last_name, className } = props;

	return (
		<div className={classNames(cls.User, {}, [className])}>
			{first_name} {last_name}
		</div>
	);
};
