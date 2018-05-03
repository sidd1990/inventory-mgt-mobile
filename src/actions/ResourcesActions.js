import axios from 'axios';
import {RESOURCE_FETCH_FAIL, RESOURCE_FETCH_SUCCESS} from './types';

const fetchResourceSuccess = (dispatch, data) => {
	dispatch({
		type: RESOURCE_FETCH_SUCCESS,
		payload: data
	});
};

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
