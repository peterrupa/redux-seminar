import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide12.css';

class Slide12 extends Component {
  render() {
    return (
      <div className="Slide12 slide">
        <CenteredSlide>
            <p className="">Three Core Principles</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide12;