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
/**
 * Class component to render a single facility on screen
 */
class FacilityListItem extends Component {
	/**
	 * Switches scenes on press
	 */
	onRowPress() {
		Actions.resourceList({facility: this.props.facility});
	}

	render() {
		const {Name} = this.props.facility;
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>{Name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default FacilityListItem;
