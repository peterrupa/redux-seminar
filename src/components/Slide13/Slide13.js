import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide13.css';

class Slide13 extends Component {
  render() {
    return (
      <div className="Slide13 slide">
        <CenteredSlide>
            <p className="main-point">Single souce of truth</p>
            <p className="">The state of your whole application is stored in an object tree within a <strong>single store</strong>.</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide13;