import cls from './Filters.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import { FilterValueType, OptionType, Selector } from 'shared/ui/Selector/Selector';

interface FiltersProps {
	filters: OptionType[],
	// eslint-disable-next-line no-unused-vars
	filterAction: (payload: FilterValueType) => Action,
	currentFilter: FilterValueType,
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

	// обработчик изменения фильтра
	const handleFilterChange = useCallback((value: FilterValueType) => {
		dispatch(filterAction(value));
	}, [dispatch, filterAction]);


	// преобразуем фильтры в нужный формат для селектора и не отображаем пустые фильтры
	const options = useMemo(() => {
		return filters.reduce((acc, { label, value }) => {
			if (label) {
				acc.push({ label: label.toUpperCase(), value });
			}
			return acc;
		}, []);
	}, [filters]);

	return (
		<div className={classNames(cls.Filters, {}, [className])}>
			<Selector options={options} value={currentFilter} onChange={handleFilterChange}/>
		</div>
	);
};
