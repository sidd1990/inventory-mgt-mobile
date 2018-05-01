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

/**
 * * Attempts to login a user
 * @param {email} Email Required to log user in
 * @param {password} Password Required to log user in
 * @returns{null} Null
 */
export const loginUser = ({email, password}) => {
	return dispatch => {
		dispatch({
			type: LOGIN_USER
		});
		console.log('email and password: ' + email + ' ' + password);
		axios
			.post('http://ims-5320.us-east-2.elasticbeanstalk.com/api/values/Login', {
				Username: email,
				Password: password
			})
			.then(data => {
				loginUserSuccess(dispatch, data.data);
			})
			.catch(error => {
				console.log(error);
				loginUserFail(dispatch);
			});
	};
};
