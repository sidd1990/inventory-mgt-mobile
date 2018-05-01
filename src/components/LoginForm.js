import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Button, Input, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';

const styles = {
	errorTextStyle: {
		alignSelf: 'center',
		fontSize: 20,
		color: 'red'
	}
};
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

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large"/>;
		}
		return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{backgroundColor: 'white'}}>
					<Text style={styles.errorTextStyle}>{this.props.error}</Text>
				</View>
			);
		}
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
				{this.renderError()}
				<CardSection>{this.renderButton()}</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const {email, password, error, loading} = state.auth;
	return {
		email: email,
		password: password,
		error: error,
		loading: loading
	};
};

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	loginUser
})(LoginForm);
