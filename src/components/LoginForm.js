import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Button, Input} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const {email, password} = this.props;
		this.props.loginUser({email, password});
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Password"
						placeholder="password"
						secureTextEntry
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Login</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const {email, password} = state.auth;
	return {
		email: email,
		password: password
	};
};

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	loginUser
})(LoginForm);
