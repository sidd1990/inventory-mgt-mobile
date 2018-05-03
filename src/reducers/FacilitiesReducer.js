import {FACILITY_FETCH_FAIL, FACILITY_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {facilities: [], error: ''};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FACILITY_FETCH_SUCCESS:
			return {...INITIAL_STATE, facilities: action.payload};
		case FACILITY_FETCH_FAIL:
			return {...INITIAL_STATE, error: 'Unable to fetch facilities'};
		default:
			return state;
	}
};
