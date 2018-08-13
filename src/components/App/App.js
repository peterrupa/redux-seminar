import React, { Component } from 'react';

import './App.css';

import Slide1 from '../Slide1/Slide1';
import Slide2 from '../Slide2/Slide2';
import Slide3 from '../Slide3/Slide3';
import Slide4 from '../Slide4/Slide4';
import Slide5 from '../Slide5/Slide5';
import Slide6 from '../Slide6/Slide6';
import Slide7 from '../Slide7/Slide7';
import Slide8 from '../Slide8/Slide8';
import Slide9 from '../Slide9/Slide9';
import Slide10 from '../Slide10/Slide10';
import Slide11 from '../Slide11/Slide11';
import Slide12 from '../Slide12/Slide12';
import Slide13 from '../Slide13/Slide13';
import Slide14 from '../Slide14/Slide14';
import Slide15 from '../Slide15/Slide15';
import Slide16 from '../Slide16/Slide16';
import Slide17 from '../Slide17/Slide17';

class App extends Component {
    handlePress = (event) => {
        switch(event.keyCode) {
            case 37:
                this.props.prevSlide();
                break;
            case 39:
                this.props.nextSlide();
                break;
            default:
        }
    }
    
    componentDidMount() {
        document.body.onkeydown = this.handlePress;
    }
    
    render() {
        let CurrentSlide;
        
        switch(this.props.slideReducer.currentSlide) {
            case 0:
                CurrentSlide = Slide1;
                break;
            case 1:
                CurrentSlide = Slide2;
                break;
            case 2:
                CurrentSlide = Slide3;
                break;
            case 3:
                CurrentSlide = Slide4;
                break;
            case 4:
                CurrentSlide = Slide5;
                break;
            case 5:
                CurrentSlide = Slide6;
                break;
            case 6:
                CurrentSlide = Slide7;
                break;
            case 7:
                CurrentSlide = Slide8;
                break;
            case 8:
                CurrentSlide = Slide9;
                break;
            case 9:
                CurrentSlide = Slide10;
                break;
            case 10:
                CurrentSlide = Slide11;
                break;
            case 11:
                CurrentSlide = Slide12;
                break;
            case 12:
                CurrentSlide = Slide13;
                break;
            case 13:
                CurrentSlide = Slide14;
                break;
            case 14:
                CurrentSlide = Slide15;
                break;
            case 15:
                CurrentSlide = Slide16;
                break;
            case 16:
                CurrentSlide = Slide17;
                break;
            default:
                CurrentSlide = null;
        }
        
        return (
            <div className="App">
                {
                    CurrentSlide ? 
                        <CurrentSlide
                            todoReducer={this.props.todoReducer}
                            addTodo={this.props.addTodo}
                            deleteTodo={this.props.deleteTodo}
                            toggleTodo={this.props.toggleTodo}
                        />
                    :
                        <div>Out of bounds! {this.props.currentSlide}</div>
                }
            </div>
        );
    }
}

export default App;