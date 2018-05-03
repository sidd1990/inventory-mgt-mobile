import {RESOURCE_FETCH_FAIL, RESOURCE_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {resources: [], error: ''};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RESOURCE_FETCH_SUCCESS:
			return {...state, resources: action.payload};
		case RESOURCE_FETCH_FAIL:
			return {...state, error: 'Error while retrieving data'};
		default:
			return state;
	}
};
