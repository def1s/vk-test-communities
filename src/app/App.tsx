import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface Group {
	'id': number,
	'name': string,
	'closed': boolean,
	'avatar_color'?: string,
	'members_count': number,
	'friends'?: User[]
}

interface User {
	'first_name': string,
	'last_name': string
}

const App = () => {

	return (
		<div className={classNames('App', {}, [])}>

		</div>
	);
};

export default App;
