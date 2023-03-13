import React from 'react';
import Create from './Create.js';
import './Modal.css';

function Modal({ changeGallery, closeModal, dogAdder, photoName }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal()}> X </button>
                </div>
                <div className="title"> 
                    <h2>Add your dog to Woofer</h2>
                </div>
                <div className="body">
                    <Create changeGallery={changeGallery} closeModal={closeModal} dogAdder={dogAdder} photoName={photoName} />
                </div>
            </div>
        </div>
    );
}

export default Modal;