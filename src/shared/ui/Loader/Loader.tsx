import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {

	return (
		<div className={classNames('lds-ring', {}, [className])}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
