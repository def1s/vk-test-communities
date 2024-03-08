import cls from './Filters.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import { FilterEntity, FilterEntityProps, FilterThemes, filterValueType } from 'entities/FilterEntity';

interface FiltersProps {
	filters: FilterEntityProps[],
	// eslint-disable-next-line no-unused-vars
	filterAction: (payload: filterValueType) => Action,
	currentFilter: filterValueType,
    className?: string
}

export const Filters: FC<FiltersProps> = (props) => {
	const {
		className,
		filters,
		filterAction,
		currentFilter
	} = props;

	const dispatch = useDispatch();

	const handleFilterChange = (value: filterValueType) => {
		dispatch(filterAction(value));
	};

	const renderFilters = () => {
		return filters.map(({ name, value }, index) => {
			return (
				<FilterEntity
					key={index}
					name={name}
					value={value}
					theme={currentFilter === value ? FilterThemes.ACTIVE : FilterThemes.DEFAULT}
					handleFilterChange={handleFilterChange}
				/>
			);
		});
	};

	return (
		<div className={classNames(cls.Filters, {}, [className])}>
			{ renderFilters() }
		</div>
	);
};
