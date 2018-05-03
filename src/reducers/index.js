import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import FacilitiesReducer from './FacilitiesReducer';
import ResourceReducer from './ResourceReducer';

export default combineReducers({
	auth: AuthReducer,
	facilities: FacilitiesReducer,
	resources: ResourceReducer
});
