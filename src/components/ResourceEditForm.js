import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input} from './common';

class ResourceEditForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Text>{this.props.resource.Name}</Text>
				</CardSection>
				<CardSection>
					<Input
						label="Quantity"
						placeholder="10"
						value={this.props.resource.Quantity}
						onChangeText={() => {}}
					/>
				</CardSection>
				<CardSection>
					<Button>Confirm Quantity</Button>
				</CardSection>
				<CardSection>
					<Button>Update Quantity</Button>
				</CardSection>
				<CardSection>
					<Button>Mark as Missing</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const {quantity} = state.resources;
	return {
		quantity
	};
};
