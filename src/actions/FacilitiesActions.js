import axios from 'axios';
import {FACILITY_FETCH_FAIL, FACILITY_FETCH_SUCCESS} from '../actions/types';
const fetchDataSuccess = (dispatch, data) => {
	console.log(data);
	// Dispatch({
	// 	type: FACILITY_FETCH_SUCCESS,
	// 	payload: data
	// });
};
const fetchDataFail = dispatch => {
	dispatch({
		type: FACILITY_FETCH_FAIL
	});
};
export const facilitiesFetch = ({uid}) => {
	return dispatch => {
		axios
			.get(
				`http://ims-5320.us-east-2.elasticbeanstalk.com/api/values/GetUserFacilitiesByUserId/${uid}`
			)
			.then(data => {
				fetchDataSuccess(dispatch, JSON.parse(data));
			});
	};
};
