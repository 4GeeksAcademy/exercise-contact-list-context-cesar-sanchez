const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
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
						if (response.status === 201) {
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
						if (response.status === 201) {
							getActions().getAllAgenda();
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			updateContact: (contactId, updateData) => {
				updateData.agenda_slug = "cesar86";
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(updateData)
				})
					.then(response => {
						console.log(response.status);
						if (response.status === 200) {
							getActions().getAllAgenda();
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => {
						console.log(error);
						if (error.response && error.response.status === 400) {
							console.log("Error 400: Bad Request");
							// Manejar el error 400 específicamente aquí
							// Puedes mostrar un mensaje al usuario u otras acciones según sea necesario
						}
					});
			}
		}
	};
};

export default getState;
