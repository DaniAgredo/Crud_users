import React from 'react';

const UserCard = ({ user, onEdit, onDelete }) => {
	return (
		<div className="user-card">
			<img
				className="user-card-img"
				src={user.image_url || 'https://via.placeholder.com/150'}
				alt={`${user.first_name} ${user.last_name}`}
			/>
			<div className="user-card-details">
				<h2 className="user-card-name">
					{user.first_name} {user.last_name}
				</h2>
				<p className="user-card-email">Email: {user.email}</p>
				<p className="user-card-birthday">Birthday: {user.birthday}</p>
				<div className="user-card-actions">
					<button className="btn-edit" onClick={() => onEdit(user)}>
						Edit
					</button>
					<button className="btn-delete" onClick={() => onDelete(user.id)}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
