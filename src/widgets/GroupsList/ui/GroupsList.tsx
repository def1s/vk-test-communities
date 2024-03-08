import cls from './GroupsList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from 'shared/api/fetchGroups';
import { getGroups, GroupCard, groupsActions } from 'entities/GroupCard';
import { Loader } from 'shared/ui/Loader/Loader';
import { Filters, filtersActions, getFilteredGroups } from 'features/Filters';

interface GroupsListProps {
    className?: string
}

export const GroupsList = ({ className }: GroupsListProps) => {
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const dispatch = useDispatch();
	const groups = useSelector(getGroups); // получение данных из стора
	const filteredGroups = useSelector(getFilteredGroups);

	const fetchGroupsData = async () => { // разделить логику по файлам?
		setError(false); // каждый раз при новом запросе сбрасываем ошибку в false

		try {
			setLoading(true); // пытаемся получить данные

			const response = await fetchGroups();
			if (response.result === 1 && response.data) { // если не идет в true - значит ошибка, данные не пришли
				dispatch(groupsActions.setGroupsList(response.data));
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
		return filteredGroups.map((group) => {
			const { id, ...groupProps } = group;
			return <GroupCard key={id} id={id} {...groupProps} />;
		});
	};

	const isError = error && !loading ? 'Something went wrong...' : null;
	const isLoading = loading && !error ? <Loader/> : null;
	const content = !error && !loading ? renderGroups() : null;

	return (
		<div className={classNames(cls.GroupsList, {}, [className])}>
			<Filters filters={['first', 'second', 'third']}/>
			{isError}
			{isLoading}
			{content}
		</div>
	);
};
