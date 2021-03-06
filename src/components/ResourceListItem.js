import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from './common';

const styles = {
	titleStyle: {
		paddingLeft: 15,
		fontSize: 18
	}
};
class ResourceListItem extends Component {
	onRowRender() {
		Actions.showResource({resource: this.props.resource});
	}

	render() {
		const {Name} = this.props.resource;
		return (
			<TouchableWithoutFeedback onPress={this.onRowRender.bind(this)}>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>{Name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default ResourceListItem;
