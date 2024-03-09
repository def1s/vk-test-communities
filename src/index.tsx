import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import { StoreProvider } from 'app/providers/StoreProvider';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
	<ErrorBoundary>
		<StoreProvider>
			<App/>
		</StoreProvider>
	</ErrorBoundary>
);
