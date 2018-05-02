import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {facilitiesFetch} from '../actions';

class FacilitiesList extends Component {
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

export default connect(null, {facilitiesFetch})(FacilitiesList);
