import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide2.css';

class Slide2 extends Component {
  render() {
    return (
      <div className="Slide2 slide">
        <CenteredSlide>
            <p className="main-point">Why do we need to manage our state in our apps?</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide2;