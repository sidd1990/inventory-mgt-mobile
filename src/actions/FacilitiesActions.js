import axios from 'axios';
import {FACILITY_FETCH_FAIL, FACILITY_FETCH_SUCCESS} from '../actions/types';

const fetchDataSuccess = (dispatch, data) => {
	dispatch({
		type: FACILITY_FETCH_SUCCESS,
		payload: data
	});
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
