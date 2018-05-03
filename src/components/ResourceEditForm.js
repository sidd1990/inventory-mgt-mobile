import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Card, CardSection, Input, Header} from './common';
import {
	quantityChanged,
	markAsMissing,
	confirmQuantity,
	updateQuantity
} from '../actions';

class ResourceEditForm extends Component {
	onConfirmClick() {
		this.props.confirmQuantity({resourceId: this.props.resource.Id});
	}

	onUpdateClick() {
		this.props.updateQuantity({resourceId: this.props.resource.Id});
	}

	onMarkClick() {
		this.props.markAsMissing({resourceId: this.props.resource.Id});
	}

	render() {
		return (
			<Card>
				<Header headerText={this.props.resource.Name}/>
				<CardSection>
					<Input
						label="Quantity"
						placeholder="10"
						value={String(this.props.quantity)}
						onChangeText={text => {
							this.props.quantityChanged(text);
						}}
					/>
				</CardSection>
				<CardSection>
					<Button onPress={this.onConfirmClick.bind(this)}>
						Confirm Quantity
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onUpdateClick.bind(this)}>
						Update Quantity
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onMarkClick.bind(this)}>Mark as Missing</Button>
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

export default connect(mapStateToProps, {quantityChanged})(ResourceEditForm);
