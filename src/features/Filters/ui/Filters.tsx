import cls from './Filters.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface FiltersProps {
	filters: string[],
    className?: string
}

export const Filters = ({ filters, className }: FiltersProps) => {
	const renderFilters = () => {
		return filters.map((filter, index) => {
			return <div key={index} className={cls.filter}>filter</div>;
		});
	};

	return (
		<div className={classNames(cls.Filters, {}, [className])}>
			{ renderFilters() }
		</div>
	);
};
