import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide11.css';

class Slide11 extends Component {
  render() {
    return (
      <div className="Slide11 slide">
        <CenteredSlide>
            <p className="">Debugging tools with Time Traveling</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide11;