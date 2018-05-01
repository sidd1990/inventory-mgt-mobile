import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Button, Input} from './common';
import {emailChanged, passwordChanged} from '../components/actions';

class LoginForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input label="Email" placeholder="email@gmail.com"/>
				</CardSection>
				<CardSection>
					<Input label="Password" placeholder="password" secureTextEntry/>
				</CardSection>
				<CardSection>
					<Button>Login</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
