import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ onSubmit, selectedUser }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: selectedUser || {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			birthday: '',
			image_url: '',
		},
	});

	useEffect(() => {
		if (selectedUser) {
			reset(selectedUser);
		}
	}, [selectedUser, reset]);

	const submitHandler = (data) => {
		onSubmit(data);
	};

	return (
		<form onSubmit={handleSubmit(submitHandler)} className="user-form">
			<label>First Name</label>
			<input
				type="text"
				{...register('first_name', {
					required: 'First name is required',
					pattern: {
						value: /^[A-Za-z]+$/i,
						message: 'First name must contain only letters',
					},
				})}
				className={errors.first_name ? 'error' : ''}
			/>
			{errors.first_name && <span>{errors.first_name.message}</span>}

			<label>Last Name</label>
			<input
				type="text"
				{...register('last_name', {
					required: 'Last name is required',
					pattern: {
						value: /^[A-Za-z]+$/i,
						message: 'Last name must contain only letters',
					},
				})}
				className={errors.last_name ? 'error' : ''}
			/>
			{errors.last_name && <span>{errors.last_name.message}</span>}

			<label>Email</label>
			<input
				type="email"
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
						message: 'Please enter a valid email address',
					},
				})}
				className={errors.email ? 'error' : ''}
			/>
			{errors.email && <span>{errors.email.message}</span>}

			<label>Password</label>
			<input
				type="password"
				{...register('password', {
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Password must be at least 6 characters long',
					},
				})}
				className={errors.password ? 'error' : ''}
			/>
			{errors.password && <span>{errors.password.message}</span>}

			<label>Birthday</label>
			<input
				type="date"
				{...register('birthday', { required: 'Birthday is required' })}
				className={errors.birthday ? 'error' : ''}
			/>
			{errors.birthday && <span>{errors.birthday.message}</span>}

			<label>Image URL</label>
			<input
				type="text"
				{...register('image_url')}
				className={errors.image_url ? 'error' : ''}
			/>
			{errors.image_url && <span>{errors.image_url.message}</span>}

			<button type="submit">{selectedUser ? 'Update' : 'Submit'}</button>
		</form>
	);
};

export default UserForm;
