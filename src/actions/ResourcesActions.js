import axios from 'axios';
import {
	RESOURCE_FETCH_FAIL,
	RESOURCE_FETCH_SUCCESS,
	QUANTITY_CHANGED,
	CONFIRM_RESOURCE_QUANTITY,
	MARK_RESOURCE_MISSING,
	UPDATE_RESOURCE_QUANTITY
} from './types';

const fetchResourceSuccess = (dispatch, data) => {
	dispatch({
		type: RESOURCE_FETCH_SUCCESS,
		payload: data
	});
};
/**
 * * Attempts to fetch resources for a particular facility
 * @param {Object} facilityId Id of facility
 * @returns {Function} New async action
 */
export const fetchResources = ({facilityId}) => {
	return dispatch => {
		axios
			.get(
				`https://pu65y7gbt8.execute-api.us-east-1.amazonaws.com/dev/get/resourceverify/facilityid/${facilityId}`
			)
			.then(data => {
				fetchResourceSuccess(dispatch, data.data);
			})
			.catch(error => {
				console.log('Error fetching resource: ' + error);
				dispatch({
					type: RESOURCE_FETCH_FAIL
				});
			});
	};
};

export const quantityChanged = ({quantity}) => {
	return {
		type: QUANTITY_CHANGED,
		payload: quantity
	};
};
const confirmQuantitySuccess = (dispatch, data) => {
	dispatch({
		type: CONFIRM_RESOURCE_QUANTITY,
		data: data
	});
};
/**
 * * Verifies quantity of resource
 * @param {Object} param0 Resource id
 * @returns {Function} New async action
 */
export const confirmQuantity = ({resourceId}) => {
	return dispatch => {
		// Make axios post command here
		console.log('CONFIRM QUANTITY CLICKED!');
		console.log(resourceId);
	};
};
const updateQuantitySuccess = (dispatch, data) => {
	dispatch({
		type: UPDATE_RESOURCE_QUANTITY,
		data: data
	});
};
/**
 * * Attempts to update quantity with specified quantity
 * @param {Object} param0 Object containing resourceId and quantity
 * @returns {Function} New async action
 */
export const updateQuantity = ({resourceId, quantity}) => {
	return dispatch => {
		// Make axios post command here
		console.log('UPDATE QUANTITY CLICKED!');
		console.log(resourceId);
	};
};
/**
 * * Attempts to set mark as missing for resource
 * @param {Object} param0 Object containing resource id
 * @returns {Function} New async action
 */
export const markAsMissing = ({resourceId}) => {
	return dispatch => {
		// Make axios post command here
		console.log('MARK AS MISSING CLICKED!');
		console.log(resourceId);
	};
};
