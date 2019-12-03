import React from 'react';
import { Row } from 'simple-flexbox'
import { Header } from "semantic-ui-react";

export const Product = ({currentProduct}) => {
	console.log(currentProduct)
	return (
		<div class="ui action input">
			<Row horizontal='center'>
				<Header as='h5'>{currentProduct.product}</Header>
  				<input type="text" placeholder="Enter Quantity"/>
  				<button class="ui button">Add to Cart</button>
  			</Row>
		</div>
	);

}