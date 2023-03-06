import React from 'react';
import './Gallery.css';

function Gallery({ changeGallery, photoName }) {

    const [images, length] = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    const imagesDiv = [];

    for (let i = 0; i < length; i++) {
        imagesDiv.push(
            <img className="m-1" id={'pies' + i + '.jpg' } src={images['pies' + i + '.jpg']} width="80px" height="120px" onClick={choosePhoto} />
        );
    }

    function choosePhoto(event) {
        console.log(event.target.src);
        console.log(event.target.id);
        
        photoName = event.target.id;
        changeGallery();
    }

    function importAll(r) {
        let i = 0;
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); i++; });
        return [images, i];
    }

    

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={changeGallery}> X </button>
                </div>
                <div className="title">
                    <h2>Choose picture of a dog</h2>
                </div>
                <div>
                   
                        {imagesDiv} 
                   
                </div>
                <div className="footer">
                    <button onClick={changeGallery} id="cancelBtn"> Cancel </button>
                </div>
            </div>
        </div>

    );
}

export default Gallery;