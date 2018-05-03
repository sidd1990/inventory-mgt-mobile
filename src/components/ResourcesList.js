import React, {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import {resourcesFetch} from '../actions';
import ResourceListItem from './ResourceListItem';

class ResourceList extends Component {
	createDataSource({resources}) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(resources);
	}

	componentWillMount() {
		this.props.resourcesFetch({facilityId: this.props.facility.Id});
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(newProps) {
		this.createDataSource(newProps);
	}

	renderRow(resource) {
		return <ResourceListItem resource={resource}/>;
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
	const {resources} = state.resources;
	return {
		resources
	};
};

export default connect(mapStateToProps, {resourcesFetch})(ResourceList);
