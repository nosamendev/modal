import React from 'react';
import './Modal.css';


const Modal = (props) => {

    return(
        <div id="modal-container" onClick={props.handleModalClose}>
            <div id="modal" onClick={(e) => e.stopPropagation()}>
                <span onClick={props.handleModalClose}>Close</span>
                <h2>Modal</h2>
                <p>description</p>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;