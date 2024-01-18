import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { ModalUpdate } from "../component/ModalUpdate.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		contactIdToDelete: null,
		showModalUpdate: false,
		contactId: null,
		full_name: null,
		phone: null,
		address: null,
		email: null
	});
	const { store, actions } = useContext(Context);
	console.log(state);
	useEffect(() => {
		actions.getAllAgenda();
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map(item => (
							<ContactCard
								key={item.id}
								full_name={item.full_name}
								email={item.email}
								address={item.address}
								phone={item.phone}
								onDelete={() => setState({ showModal: true, contactIdToDelete: item.id })}
								onUpdate={() =>
									setState({
										showModalUpdate: true,
										contactId: item.id,
										full_name: item.full_name,
										phone: item.phone,
										address: item.address,
										email: item.email
									})
								}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.contactIdToDelete} onClose={() => setState({ showModal: false })} />
			<ModalUpdate
				show={state.showModalUpdate}
				id={state.contactId}
				full_name={state.full_name}
				phone={state.phone}
				address={state.address}
				email={state.email}
				onClose={() => setState({ showModalUpdate: false })}
			/>
		</div>
	);
};
