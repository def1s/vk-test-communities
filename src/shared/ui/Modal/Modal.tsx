import React, { FC } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ModalProps {
	positionX: number,
	positionY: number,
	children: React.ReactNode,
	onClose: () => void,
    className?: string
}

export const Modal: FC<ModalProps> = (props) => {
	const {
		positionX,
		positionY,
		children,
		onClose,
		className
	} = props;
	/*
		на самом деле я здесь осознанно нарушаю правило fsd о том, что нельзя импортировать что-то с того же слоя,
		но это поможет лишний код при использовании компонента, не нужно каждый раз писать Portal
	*/
	return (
		<Portal>
			<div
				className={classNames(cls.Modal, {}, [className])}
				style={{ top: positionY, left: positionX }}
			>
				<div className={cls.cross} onClick={onClose}></div>
				<div className={cls.content}>
					{children}
				</div>
			</div>
		</Portal>
	);
};
