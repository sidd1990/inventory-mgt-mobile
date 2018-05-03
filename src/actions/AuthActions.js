import {Actions} from 'react-native-router-flux';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER,
	LOGIN_USER_FAIL
} from './types';
import axios from 'axios';

/**
 * * Action to track change in email
 * @param {String} text New incoming text
 * @returns {Object} Action
 */
export const emailChanged = text => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};
/**
 * * Action to track change in password field
 * @param {String} text New incoming text
 * @returns {Object} Action
 */
export const passwordChanged = text => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};
/**
 * * Logic for when user logs in successfully
 * @param {function} dispatch Manually dispatch request
 * @param {string} data Data to send as part of state
 */
const loginUserSuccess = (dispatch, data) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: data
	});
	Actions.main();
};
/**
 * * Logic for when user log in fails
 * @param {function} dispatch Manually dispatch request
 */
const loginUserFail = dispatch => {
	dispatch({
		type: LOGIN_USER_FAIL
	});
};

/**
 * * Attempts to login a user
 * @param {email} Email Required to log user in
 * @param {password} Password Required to log user in
 * @returns{function} Manual handling of async requests
 */
export const loginUser = ({email, password}) => {
	return dispatch => {
		dispatch({
			type: LOGIN_USER
		});
		axios
			.post(
				'https://pu65y7gbt8.execute-api.us-east-1.amazonaws.com/dev/users/login',
				{
					username: email,
					password: password
				}
			)
			.then(data => {
				loginUserSuccess(dispatch, data.data);
			})
			.catch(error => {
				console.log(error);
				loginUserFail(dispatch);
			});
	};
};
