import cls from './s.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface GroupListProps {
    className?: string
}

export const GroupList = ({ className }: GroupListProps) => {

	return (
		<div className={classNames(cls.GroupList, {}, [className])}>

		</div>
	);
};
