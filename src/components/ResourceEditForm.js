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
		this.props.updateQuantity({
			resourceId: this.props.resource.Id,
			quantity: Number(this.props.quantity)
		});
	}

	onMarkClick() {
		this.props.markAsMissing({resourceId: this.props.resource.Id});
	}

	renderConfirm() {
		if (this.props.resource.Verified) {
			return (
				<Button disabled onPress={this.onConfirmClick.bind(this)}>
					Confirm Quantity
				</Button>
			);
		}
		return (
			<Button onPress={this.onConfirmClick.bind(this)}>Confirm Quantity</Button>
		);
	}

	renderUpdate() {
		if (this.props.resource.Verified) {
			return (
				<Button disabled onPress={this.onUpdateClick.bind(this)}>
					Update Quantity
				</Button>
			);
		}
		return (
			<Button onPress={this.onUpdateClick.bind(this)}>Update Quantity</Button>
		);
	}

	renderMarkMissing() {
		if (this.props.resource.Verified) {
			return (
				<Button disabled onPress={this.onMarkClick.bind(this)}>
					Mark as Missing
				</Button>
			);
		}
		return (
			<Button onPress={this.onMarkClick.bind(this)}>Mark as Missing</Button>
		);
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
				<CardSection>{this.renderConfirm()}</CardSection>
				<CardSection>{this.renderUpdate()}</CardSection>
				<CardSection>{this.renderMarkMissing()}</CardSection>
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

export default connect(mapStateToProps, {
	quantityChanged,
	confirmQuantity,
	markAsMissing,
	updateQuantity
})(ResourceEditForm);
