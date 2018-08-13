import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide5.css';

class Slide5 extends Component {
  render() {
    return (
      <div className="Slide5 slide">
        <CenteredSlide>
            <p className="main-point">Why was Redux made?</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide5;