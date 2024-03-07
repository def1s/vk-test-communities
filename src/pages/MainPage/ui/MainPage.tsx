import { GroupsList } from 'widgets/GroupsList';

interface MainPageProps {
    className?: string
}

export const MainPage = ({ className }: MainPageProps) => {

	return (
		<div>
			<GroupsList/>
		</div>
	);
};
