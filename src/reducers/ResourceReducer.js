import {RESOURCE_FETCH_FAIL, RESOURCE_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {resources: [], error: ''};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RESOURCE_FETCH_SUCCESS:
			return {...INITIAL_STATE, resources: action.payload};
		case RESOURCE_FETCH_FAIL:
			return {...INITIAL_STATE, error: 'Error while retrieving data'};
		default:
			return state;
	}
};
