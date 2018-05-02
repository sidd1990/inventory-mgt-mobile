import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import FacilitiesReducer from './FacilitiesReducer';

export default combineReducers({
	auth: AuthReducer,
	facilities: FacilitiesReducer
});
