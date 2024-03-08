import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';

const App = () => {

	return (
		<div className={classNames('App', {}, [])}>
			<MainPage/>
		</div>
	);
};

export default App;
