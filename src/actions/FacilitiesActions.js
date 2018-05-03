import axios from 'axios';
import {FACILITY_FETCH_FAIL, FACILITY_FETCH_SUCCESS} from '../actions/types';

/**
 * * Creates new action of specific type
 * @param {Function} dispatch Used to send action asynchronously
 * @param {Array} data Array object containing all data
 */
const fetchDataSuccess = (dispatch, data) => {
	dispatch({
		type: FACILITY_FETCH_SUCCESS,
		payload: data
	});
};
/**
 * * Creates new action of specific type
 * @param {Function} dispatch Used to send action in async
 */
const fetchDataFail = dispatch => {
	dispatch({
		type: FACILITY_FETCH_FAIL
	});
};

/**
 * * Attempts to fetch facilities for user
 * @param {Object} uid User id to fetch facilities for
 * @returns {Function} New action using dispatch
 */
export const facilitiesFetch = ({uid}) => {
	return dispatch => {
		axios
			.get(
				`https://pu65y7gbt8.execute-api.us-east-1.amazonaws.com/dev/get/userfacilities/userid/${uid}`
			)
			.then(data => {
				fetchDataSuccess(dispatch, data.data);
			})
			.catch(error => {
				console.log('Error in fetching: ' + error);
				fetchDataFail(dispatch);
			});
	};
};
