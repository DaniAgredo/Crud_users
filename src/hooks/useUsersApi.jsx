import { useState, useEffect } from 'react';
import axios from 'axios';

const useUsersApi = () => {
	const baseUrl = 'https://users-crud-api-81io.onrender.com/api/v1/users';
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getUsers = async () => {
		setIsLoading(true);
		try {
			const { data } = await axios.get(baseUrl);
			setUsers(Array.isArray(data) ? data : []);
		} catch (error) {
			console.error('Error fetching users:', error);
			setUsers([]);
		} finally {
			setIsLoading(false);
		}
	};

	const createUser = async (userData) => {
		try {
			await axios.post(baseUrl, userData);
			getUsers();
		} catch (error) {
			console.error('Error creating user:', error);
		}
	};

	const updateUser = async (id, userData) => {
		try {
			await axios.put(`${baseUrl}/${id}`, userData);
			getUsers();
		} catch (error) {
			console.error('Error updating user:', error);
		}
	};

	const deleteUser = async (id) => {
		try {
			await axios.delete(`${baseUrl}/${id}`);
			getUsers();
		} catch (error) {
			console.error('Error deleting user:', error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return { users, isLoading, createUser, updateUser, deleteUser };
};

export default useUsersApi;
