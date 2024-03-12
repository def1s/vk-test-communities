import React, { useState, FC, useEffect } from 'react';
import cls from './Selector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export type FilterValueType = string | number | boolean | null;

export interface OptionType {
	value: FilterValueType;
	label: string;
}

interface SelectorProps {
	options: OptionType[];
	value: FilterValueType;
	onChange: (value: FilterValueType) => void;
	className?: string;
}


// кастомный селектор, который способен в качестве value принимать string | number | boolean | null
export const Selector: FC<SelectorProps> = ({ options, value, onChange, className }) => {
	const [isOpen, setIsOpen] = useState(false);
	// находим выбранную опцию
	const selectedOption = options.find(option => option.value === value);

	// закрываем селектор при клике вне его
	useEffect(() => {
		const close = (e: MouseEvent) => {
			if (!(e.target as HTMLElement).closest(`.${cls.Selector}`)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', close);

		// удаляем обработчик при размонтировании
		return () => {
			document.removeEventListener('click', close);
		};
	}, []);

	// обработчик клика по опции
	const handleOptionClick = (value: string | number | boolean | null) => {
		onChange(value);
		setIsOpen(false);
	};

	return (
		<div className={classNames(cls.Selector, {}, [className])} onClick={() => setIsOpen(!isOpen)}>
			{selectedOption ? selectedOption.label : 'Select...'}
			{isOpen && (
				<div className={cls.Options}>
					{options.map((option, index) => (
						<div key={index} onClick={() => handleOptionClick(option.value)}>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
