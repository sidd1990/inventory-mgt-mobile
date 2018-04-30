import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-native';
import {createStore} from 'react-redux';
import reducers from 'redux';
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
