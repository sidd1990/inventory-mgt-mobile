import {FACILITY_FETCH_FAIL, FACILITY_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FACILITY_FETCH_SUCCESS:
			return {...state, facilities: action.payload};
		default:
			return state;
	}
};
