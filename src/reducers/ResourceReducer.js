import {
	RESOURCE_FETCH_FAIL,
	RESOURCE_FETCH_SUCCESS,
	QUANTITY_CHANGED
} from '../actions/types';

const INITIAL_STATE = {resources: [], error: '', quantity: 0};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RESOURCE_FETCH_SUCCESS:
			return {...INITIAL_STATE, resources: action.payload};
		case RESOURCE_FETCH_FAIL:
			return {...INITIAL_STATE, error: 'Error while retrieving data'};
		case QUANTITY_CHANGED:
			return {...state, quantity: action.payload};
		default:
			return state;
	}
};
