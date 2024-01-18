const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getAllAgenda: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/cesar86")
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},
			createContact: newContact => {
				console.log(newContact);
				fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newContact)
				})
					.then(response => {
						console.log(response.status);
						if (response.status == 201) {
							alert("Contacto creado correctamente");
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			deleteContact: contactId => {
				console.log(contactId);
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
					method: "DELETE"
				})
					.then(response => {
						console.log(response.status);
						if (response.status == 201) {
							getActions().getAllAgenda();
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			updateContact: (contactId, updateData) => {
				console.log(updateData, contactId);
				/*fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(updateData)
				})
					.then(response => {
						console.log(response.status);
						if (response.status == 200) {
							getActions().getAllAgenda();
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log(error));*/
			}
		}
	};
};
export default getState;
