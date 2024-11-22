import React, { useState, useEffect } from 'react';
import useUsersApi from './hooks/useUsersApi';
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';
import Modal from './components/Modal';
import './App.css';

const App = () => {
	const { users, isLoading, createUser, updateUser, deleteUser } =
		useUsersApi();
	const [selectedUser, setSelectedUser] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);

	const handleCreateUser = (userData) => {
		createUser(userData);
		setModalOpen(true);
	};

	const handleUpdateUser = (userData) => {
		if (selectedUser) {
			updateUser(selectedUser.id, userData);
			setSelectedUser(null);
			setModalOpen(true);
		}
	};

	const handleEditUser = (user) => {
		setSelectedUser(user);
	};

	const handleDeleteUser = (id) => {
		deleteUser(id);
		setModalOpen(true);
	};

	return (
		<div className="app">
			<h1>Admin Users</h1>

			<UserForm
				onSubmit={selectedUser ? handleUpdateUser : handleCreateUser}
				selectedUser={selectedUser}
			/>

			<div className="user-cards">
				{isLoading ? (
					<p>Loading...</p>
				) : (
					users.map((user) => (
						<UserCard
							key={user.id}
							user={user}
							onEdit={handleEditUser}
							onDelete={handleDeleteUser}
						/>
					))
				)}
			</div>

			{modalOpen && <Modal onClose={() => setModalOpen(false)} />}
		</div>
	);
};

export default App;
