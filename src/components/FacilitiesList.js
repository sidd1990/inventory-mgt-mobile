import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, Text} from 'react-native';
import {facilitiesFetch} from '../actions';
import FacilityListItem from './FacilityListItem';

class FacilitiesList extends Component {
	componentWillMount() {
		this.props.facilitiesFetch({uid: this.props.user.UserId});
	}

	render() {
		return (
			<View>
				<Text>Facility List</Text>
				<Text>Facility List</Text>
				<Text>Facility List</Text>
				<Text>Facility List</Text>
				<Text>Facility List</Text>
				<Text>Facility List</Text>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const {user} = state.auth;
	const {facilities} = state.facilities;
	return {
		user: user,
		facilities: facilities
	};
};

export default connect(mapStateToProps, {facilitiesFetch})(FacilitiesList);
