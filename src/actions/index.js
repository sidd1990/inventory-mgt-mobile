import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS} from './types';

export const emailChanged = text => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = text => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({email, password}) => {
	return dispatch => {
		// TODO Fetch User From API
		console.log('email and password: ' + email + ' ' + password);
		// TODO Use dispatch in 'then' of axios.post
		// TODO axios.post('url').then((user) => {FILL DISPATCH HERE})
		// TODO dispatch(type: LOGIN_USER_SUCCESS, payload: user)
	};
};
