import { GroupsList } from 'widgets/GroupsList';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

// interface MainPageProps {
//     className?: string
// }

export const MainPage = () => {

	return (
		<div className={classNames(cls.MainPage)}>
			<GroupsList/>
		</div>
	);
};
