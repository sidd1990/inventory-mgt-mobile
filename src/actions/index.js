import {Actions} from 'react-native-router-flux';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER,
	LOGIN_USER_FAIL
} from './types';
import axios from 'axios';

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

const loginUserSuccess = (dispatch, data) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: data
	});
	Actions.facilityList();
};

const loginUserFail = dispatch => {
	dispatch({
		type: LOGIN_USER_FAIL
	});
};

export const loginUser = ({email, password}) => {
	return dispatch => {
		dispatch({
			type: LOGIN_USER
		});
		// TODO Fetch User From API
		console.log('email and password: ' + email + ' ' + password);
		// TODO Use dispatch in 'then' of axios.post
		// TODO axios.post('url').then((user) => {FILL DISPATCH HERE})
		// TODO dispatch(type: LOGIN_USER_SUCCESS, payload: user)
		axios
			.get('https://api.jikan.me/anime/1')
			.then(data => {
				loginUserSuccess(dispatch, data);
			})
			.catch(() => {
				loginUserFail(dispatch);
			});
	};
};
