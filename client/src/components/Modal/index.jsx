import React from "react";
import "../../App.css";

const Modal = ({ onClose, title, submitText, children }) => {

  return (
		<div className="modal-main" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<h4 className="modal-title">{title}</h4>
				</div>

				<div className="modal-body">{children}</div>

				<div className="modal-footer">
					<button className="modal-enter-button">{submitText || "Enter"}</button>
					<button onClick={onClose} className="modal-close-button">
						Close
					</button>
				</div>
			</div>
		</div>
  );
};

export default Modal;
