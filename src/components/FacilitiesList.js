import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, Text} from 'react-native';
import {facilitiesFetch} from '../actions';
import FacilityListItem from './FacilityListItem';

class FacilitiesList extends Component {
	componentWillMount() {
		this.props.facilitiesFetch({uid: this.props.user.UserId});
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(newProps) {
		this.createDataSource(newProps);
	}

	createDataSource({facilities}) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(facilities);
	}

	renderRow(facility) {
		return <FacilityListItem facility={facility}/>;
	}

	render() {
		return (
			<ListView
				enableEmptySection
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
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
