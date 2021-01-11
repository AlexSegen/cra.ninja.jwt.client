import React, { useState, createContext } from 'react';
import ApiService from "../services/api.service";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {

	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({ id: null, title: "", description: "" });

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const GetUsers = () => {

		setLoading(true);

		ApiService.get('/admin/users').then(response => {

			setUsers(response.data);
			setLoading(false);

		}).catch(err => {
			setLoading(false);
			setUsers([]);

			if (err.response) {
				setError(err.response.data.message)
				return;
			}

			setError(err.message);

		});
	}


	const UpdateUser = (user) => {
		setLoading(true);

		const { first_name, last_name, avatar, email, permissions, role } = user;

		ApiService.put('/admin/users/' + user._id, { first_name, last_name, avatar, email, permissions, role }).then(response => {

			setUser(response.data);
			setLoading(false);

		}).catch(err => {
			setLoading(false);
			setUsers([]);

			if (err.response) {
				setError(err.response.data.message)
				return;
			}

			setError(err.message);
		});

	}

	return (
		<UsersContext.Provider value={{ GetUsers, UpdateUser, user, users, loading, error }}>
			{children}
		</UsersContext.Provider>
	);

}

export default UsersContextProvider;