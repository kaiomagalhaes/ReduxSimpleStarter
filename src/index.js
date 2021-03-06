import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/app'

ReactDOM.render(
	<App />,
	document.querySelector('.container')
);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/app', () => {
		const NextApp = require('./components/app').default;
		ReactDOM.render(
			<AppContainer>
				<NextApp/>
			</AppContainer>,
			document.querySelector('.container')
		);
	});
}
