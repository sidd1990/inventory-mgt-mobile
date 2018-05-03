import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Card, CardSection, Input, Header} from './common';
import {quantityChanged} from '../actions';

class ResourceEditForm extends Component {
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

export default connect(mapStateToProps, {quantityChanged})(ResourceEditForm);
