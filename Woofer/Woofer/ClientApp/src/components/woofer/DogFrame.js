import React from 'react';
import './DogFrame.css';
import axios from 'axios';

const DogFrame = (props) => {
    const [showInfo, setShowInfo] = React.useState(false);
    const onClickInfo = () => showInfo ? setShowInfo(false) : setShowInfo(true);
    const picDog = './images/' + props.dogInf.photoUrl;
    let genderIcon = props.dogInf.gender
        ? <i className="bi bi-gender-male fs-5 float-end"></i>
        : <i className="bi bi-gender-female fs-5 float-end"></i>;


    const DeleteStudent = () => {
        axios({
            method: 'delete',
            url: 'doginfo/delete?id=' + props.dogInf.id,
        })
            .then(json => {
                alert('Record deleted successfully!! Please refresh the page.');
            }).catch((error) => {
                console.log(error)
            });

            
    }  

    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="border border-dark bg-white rounded-3 shadow-pop bg-white rounded"  >
                <div>
                    <div className="containerImg">
                        <img src={require(`${picDog}`)} alt="gg" height="450" width="303" />
                        {!props.closeModal && <button className="btnImg" type='button' onClick={DeleteStudent}><i class="bi bi-trash3"></i>
                            </button>}
                    </div>
                    <div className="m-2">
                        <div >
                            <h5 className="d-inline">{props.dogInf.name}, </h5>
                            <p className="d-inline lead"> {props.dogInf.age}</p>
                            <div className="d-inline" > {genderIcon}</div>
                        </div>
                        <div>
                            <p className="d-inline">{props.dogInf.breed}</p>
                            <button className="btn bg-white float-end shadow-none p-0 fs-5" onClick={onClickInfo}><i className="bi bi-info-circle"></i></button>
                        </div>
                        <div style={{ width: 280 }} >
                            {showInfo ? props.dogInf.description : null}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DogFrame;