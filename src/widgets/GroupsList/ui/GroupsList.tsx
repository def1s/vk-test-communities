import cls from './GroupsList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from 'shared/api/fetchGroups';
import { groupsListActions } from '../model/slice/groupsListSlice';
import { getGroupsList } from '../model/selectors/getGroupsList';
import { GroupCard } from 'entities/GroupCard';

interface GroupsListProps {
    className?: string
}

export const GroupsList = ({ className }: GroupsListProps) => {
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const dispatch = useDispatch();
	const groups = useSelector(getGroupsList); // получение данных из стора

	const fetchGroupsData = async () => { // разделить логику по файлам?
		setError(false); // каждый раз при новом запросе сбрасываем ошибку в false

		try {
			setLoading(true); // пытаемся получить данные

			const response = await fetchGroups();
			if (response.result === 1 && response.data) { // если не идет в true - значит ошибка, данные не пришли
				dispatch(groupsListActions.setGroupsList(response.data));
			} else {
				setError(true);
			}
		} catch (error) {
			console.error(error);
			setError(true);
		} finally { // в любом случае завершаем загрузку
			setLoading(false);
		}
 	};

	useEffect(() => {
		fetchGroupsData();
	}, []);

	const renderGroups = () => { // функция для рендера данных
		return groups.map((group) => {
			const { id, ...groupProps } = group;
			return <GroupCard key={id} {...groupProps} />;
		});
	};

	const isError = error && !loading ? 'Something went wrong...' : null;
	const isLoading = loading && !error ? 'Loading...' : null;
	const content = !error && !loading ? renderGroups() : null;

	return (
		<div className={classNames(cls.GroupsList, {}, [className])}>
			{isError}
			{isLoading}
			{content}
		</div>
	);
};
