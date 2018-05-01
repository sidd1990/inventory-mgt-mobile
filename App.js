import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm/>
			</Provider>
		);
	}
}

export default App;
