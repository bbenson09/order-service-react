import React from 'react';
import { Dropdown } from "semantic-ui-react";

var _ = require('underscore');

export const Hospitals = ({ hospitals, onSelect }) => {
	const hospitalOptions = _.map(hospitals, (hospital, id) => ({
		key: hospital.id,
		text: hospital.name,
		value: hospital.name,
	}));
	const getHospitalSelected = ((event, {value}) => {
		console.log(value);
		let hospital = event.target.key;
		console.log(hospital);
		onSelect(hospital);
	});
	return (
		<Dropdown
			placeholder='Select Hospital'
			search
			selection
			options={hospitalOptions}
			onChange={getHospitalSelected}
		/>
	);
};