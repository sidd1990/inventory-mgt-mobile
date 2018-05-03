import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {CardSection} from './common';

class ResourceListItem extends Component {
	render() {
		const {Name} = this.props.resource;
		return (
			<TouchableWithoutFeedback>
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
