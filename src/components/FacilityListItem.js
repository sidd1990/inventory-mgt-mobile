import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';

const styles = {
	titleStyle: {
		paddingLeft: 15,
		fontSize: 18
	}
};

class FacilityListItem extends Component {
	render() {
		const {Name} = this.props.facility;
		return (
			<CardSection>
				<Text style={styles.titleStyle}>{Name}</Text>
			</CardSection>
		);
	}
}

export default FacilityListItem;
