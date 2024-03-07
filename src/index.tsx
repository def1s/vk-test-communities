import ReactDOM from 'react-dom';
import App from './app/App';
import { StoreProvider } from 'app/providers/StoreProvider';

ReactDOM.render(
	<StoreProvider>
		<App/>
	</StoreProvider>,
	document.getElementById('root')
);
