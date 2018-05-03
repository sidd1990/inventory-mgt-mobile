import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';
import {facilitiesFetch} from '../actions';
import FacilityListItem from './FacilityListItem';
/**
 * Class component for rendering a list of facilities attached to a resource checker
 */
class FacilitiesList extends Component {
	/**
	 * Called when component is first created
	 */
	componentWillMount() {
		this.props.facilitiesFetch({uid: this.props.user.userid});
		this.createDataSource(this.props);
	}

	/**
	 * Called when component is about to receive new props
	 * @param {Object} newProps New props object
	 */
	componentWillReceiveProps(newProps) {
		this.createDataSource(newProps);
	}

	/**
	 * Creates a data source for the list view
	 * @param {Object} param0 Object with all facilities in array
	 */
	createDataSource({facilities}) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(facilities);
	}

	/**
	 * Renders a row for the list view
	 * @param {Object} facility A single facility object
	 * @returns {Component} New facility
	 */
	renderRow(facility) {
		return <FacilityListItem facility={facility}/>;
	}

	/**
	 * Renders the list of facilities
	 * @returns {Component} List view
	 */
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
/**
 * Maps state to props
 * @param {Object} state State object from redux
 * @returns {Object} User and facilities props
 */
const mapStateToProps = state => {
	const {user} = state.auth;
	const {facilities} = state.facilities;
	return {
		user: user,
		facilities: facilities
	};
};

export default connect(mapStateToProps, {facilitiesFetch})(FacilitiesList);
