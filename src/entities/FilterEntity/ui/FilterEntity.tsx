import cls from './FilterEntity.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

// немного стилей для активного и неактивного фильтров
export enum FilterThemes {
	// eslint-disable-next-line no-unused-vars
	DEFAULT = 'default',
	// eslint-disable-next-line no-unused-vars
	ACTIVE = 'active'
}

export type filterValueType = string | boolean | null;

export interface FilterEntityProps {
	name: string,
	value: filterValueType,
	// eslint-disable-next-line no-unused-vars
	handleFilterChange?: (value: filterValueType) => void,
	theme?: FilterThemes,
    className?: string
}

export const FilterEntity: FC<FilterEntityProps> = (props) => {
	const {
		theme = FilterThemes.DEFAULT,
		name,
		value,
		handleFilterChange,
		className
	} = props;

	return (
		<div
			className={classNames(cls.FilterEntity, {}, [className, cls[theme]])}
			onClick={() => handleFilterChange(value)}
		>
			{name ? name.toUpperCase() : 'NONE'}
		</div>
	);
};
