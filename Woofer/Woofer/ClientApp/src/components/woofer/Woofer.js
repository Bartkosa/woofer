import React, { Component } from 'react';
import DogFrame from './DogFrame.js';
import Modal from './Modal.js';

export class Woofer extends Component {
    static displayName = Woofer.name;

    constructor(props) {
        super(props);
        this.state = { dogs: [], loading: true, dogIndex: 0, openModal: false, openGallery: false, photoName:"" };
        this.changeDog = this.changeDog.bind(this);
        this.changeModal = this.changeModal.bind(this);
    }
    
    componentDidMount() {
        this.populateDogsData();
    }

    changeDog() {
        this.setState({

            dogIndex: this.state.dogIndex < this.state.dogs.length-1 ? this.state.dogIndex + 1 : 0
        });
        Woofer.renderDogsTable(this.state);
    }

    changeModal() {
        this.setState({
            openModal: !this.state.openModal
        });

    }

    changeGallery() {
        this.setState({
            openGallery: !this.state.openGallery
        });
    }
    

    static renderDogsTable(state) {
        return (
            <div>
                <DogFrame dogInf={state.dogs[state.dogIndex]} closeModal={state.openModal} />
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Woofer.renderDogsTable(this.state);

        return (
            <div>
                <div className="m-1 container d-flex align-items-center justify-content-center ">
                    <button className="btn btn-primary m-2" onClick={this.changeModal}>Add dog</button>
                    <div className="containerImg m-2">
                        <button className="btnImg" type='button' onClick={this.DeleteDog}><i class="bi bi-trash3"></i></button>
                    </div>
                </div>
                {this.state.openModal && < Modal changeGallery={this.changeGallery} closeModal={this.changeModal} dogAdder={this.dogAdder} photoName={this.photoName} />}
                {this.state.openGallery && <Gallery changeGallery={this.changeGallery} photoName={this.photoName} />}
                {contents}
                <div className="m-1 container d-flex align-items-center justify-content-center ">
                    <div className="bg-white m-2">
                    <button className="btn btn-outline-danger btn-lg  " onClick={this.changeDog} ><i className="bi bi-x-lg"></i></button>
                    </div>
                    <div className  ="bg-white m-2">
                        <button className="btn btn-outline-success btn-lg" onClick={this.changeDog} ><i className="bi bi-heart-fill"></i></button>
                    </div>
                </div>
            </div>
        );
    }

    async populateDogsData() {
        const response = await fetch('doginfo');
        const data = await response.json();
        this.setState({ dogs: data, loading: false, dogIndex:0 });
    }
}