import React from 'react';
import Create from './Create.js';
import './Modal.css';

<<<<<<< Updated upstream
function Modal({closeModal }) {
=======
function Modal({ changeGallery, closeModal, dogAdder, photoName }) {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Create closeModal={closeModal} />
=======
                    <Create changeGallery={changeGallery} closeModal={closeModal} dogAdder={dogAdder} photoName={photoName} />
>>>>>>> Stashed changes
                </div>
                
            </div>
        </div>
    );
}

export default Modal;