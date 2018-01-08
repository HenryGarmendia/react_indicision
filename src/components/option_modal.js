import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.method_clear_selected}
		ariaHideApp={false}
		contentLabel="Selected Option"
	>
		<h3>Selected Option</h3>
		{props.selectedOption && <p>{props.selectedOption}</p>}
		<button onClick={props.method_clear_selected}>Okay</button>
	</Modal>
);

export default OptionModal