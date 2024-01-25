import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const [newFull_name, setFullName] = useState("");
	const [newAddress, setAddress] = useState("");
	const [newPhone, setPhone] = useState("");
	const [newEmail, setEmail] = useState("");

	function handleFullName(event) {
		setFullName(event.target.value);
	}
	function handleEmail(event) {
		setEmail(event.target.value);
	}

	function handlePhone(event) {
		setPhone(event.target.value);
	}
	function handleAddress(event) {
		setAddress(event.target.value);
	}
	function handleSaveContact(event) {
		event.preventDefault();
		const newData = {
			full_name: newFull_name,
			email: newEmail,
			phone: newPhone,
			address: newAddress,
			agenda_slug: "cesar86"
		};
		console.log(newData);

		if (actions && actions.createContact) {
			actions.createContact(newData);
		} else {
			console.error("actions.createContact no está definido");
			alert("Error interno al crear el contacto");
		}
	}
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={handleSaveContact}>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name" onChange={handleFullName} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" onChange={handleEmail} />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" onChange={handlePhone} />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={handleAddress}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
