import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
	return (
		<Modal
			isOpen={!!props.selectedOption}
			ariaHideApp={false}
			contentLabel="Selected Option"
		>
			<h3>Selected Option</h3>
			{props.selectedOption && <p>{props.selectedOption}</p>}
			<button onClick={props.method_clear_selected}>Okay</button>
		</Modal>
	)
};

export default OptionModal