import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide10.css';

class Slide10 extends Component {
  render() {
    return (
      <div className="Slide10 slide">
        <CenteredSlide>
            <p className="">Hot Module Replacement</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide10;