import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [
                './woofer/images/pies3.jpg',
                './woofer/images/pies1.jpg',
                './woofer/images/pies2.jpg',
                './woofer/images/pies0.jpg'
            ]
        };
    }

    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        } else {
            this.setState({
                currentImage: 0
            });
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.switchImage, 1000);
    }

    render() {
        return (
            <div>
            <h1>Woofer</h1>
            <div className="slideshow-container">
                    <img
                    src={require(`${this.state.images[this.state.currentImage]}`)}
                        alt="cleaning images"
                        width="500"
                        height="600"
                    />
                </div>
            </div>
        );
    }
}
