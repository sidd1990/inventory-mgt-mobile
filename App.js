import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {
	render() {
		return (
			<Provider
				store={(createStore(reducers), {}, applyMiddleware(ReduxThunk))}
			>
				<LoginForm/>
			</Provider>
		);
	}
}

export default App;
