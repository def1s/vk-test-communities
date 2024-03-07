import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';

const App = () => {

	return (
		<div className={classNames('App', {}, [])}>
			Something...
			<MainPage/>
		</div>
	);
};

export default App;
