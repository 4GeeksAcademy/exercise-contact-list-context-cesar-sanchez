import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context);
	const { showModal, contactIdToDelete } = state;

	function handleDeleteContact(contactId) {
		actions.deleteContact(contactId);
	}

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button onClick={() => props.onClose()} type="button" className="close" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={() => props.onClose()}>
							Oh no!
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							onClick={() => handleDeleteContact(props.id)}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number
};

Modal.defaultProps = {
	show: false,
	onClose: null
};
