import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const ModalUpdate = props => {
	const { store, actions } = useContext(Context);
	const [updatedContact, setUpdatedContact] = useState({
		full_name: props.full_name || "",
		email: props.email || "",
		address: props.address || "",
		phone: props.phone || ""
	});

	const handleInputChange = event => {
		const { name, value } = event.target;
		setUpdatedContact({ ...updatedContact, [name]: value });
	};

	const handleUpdate = event => {
		actions.updateContact(props.id, updatedContact);
		event.preventDefault();

		props.onClose();
	};

	return (
		<div className={`modal ${props.show ? "d-block" : "d-none"}`} tabIndex="-1" role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit Contact</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={props.onClose}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form onSubmit={handleUpdate}>
							<div className="form-group">
								<label htmlFor="full_name">Full Name</label>
								<input
									type="text"
									className="form-control"
									id="full_name"
									name="full_name"
									value={updatedContact.full_name}
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									className="form-control"
									id="email"
									name="email"
									value={updatedContact.email}
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="address">Address</label>
								<input
									type="text"
									className="form-control"
									id="address"
									name="address"
									value={updatedContact.address}
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="phone">Phone</label>
								<input
									type="text"
									className="form-control"
									id="phone"
									name="phone"
									value={updatedContact.phone}
									onChange={handleInputChange}
								/>
							</div>
						</form>
					</div>

					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={handleUpdate}>
							Save changes
						</button>
						<button type="button" className="btn btn-secondary" onClick={props.onClose}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ModalUpdate.propTypes = {
	full_name: PropTypes.string,
	email: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.string,
	id: PropTypes.number,
	onClose: PropTypes.func,
	show: PropTypes.bool
};
