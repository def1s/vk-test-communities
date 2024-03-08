import cls from './Filters.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Action } from '@reduxjs/toolkit';

type valueType = string | boolean | null;

interface filter {
	name: string,
	value: valueType
}

interface FiltersProps {
	filters: filter[],
	filterAction: (payload: valueType) => Action,
    className?: string
}

export const Filters: FC<FiltersProps> = (props) => {
	const {
		className,
		filters,
		filterAction
	} = props;

	const dispatch = useDispatch();

	const handleFilterChange = (value: valueType) => {
		dispatch(filterAction(value));
	};

	const renderFilters = () => {
		return filters.map(({ name, value }, index) => {
			return <div key={index} className={cls.filter} onClick={() => handleFilterChange(value)}>{name}</div>;
		});
	};

	return (
		<div className={classNames(cls.Filters, {}, [className])}>
			{ renderFilters() }
		</div>
	);
};
