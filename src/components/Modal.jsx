import React from 'react';

const Modal = ({ onClose }) => {
	return (
		<div className="modal">
			<div className="modal-content">
				<p>Action successful!</p>
				<button className="btn-close" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;
