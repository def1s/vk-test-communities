import React, { useState, FC } from 'react';
import cls from './Selector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface OptionType {
	value: string | number | boolean | null;
	label: string;
}

interface SelectorProps {
	options: OptionType[];
	value: string | number | boolean | null;
	onChange: (value: string | number | boolean | null) => void;
	className?: string;
}

export const Selector: FC<SelectorProps> = ({ options, value, onChange, className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectedOption = options.find(option => option.value === value);

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
