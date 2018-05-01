import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<LoginForm/>
			</Provider>
		);
	}
}

export default App;
