import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide9.css';

class Slide9 extends Component {
  render() {
    return (
      <div className="Slide9 slide">
        <CenteredSlide>
            <p className="">Predictable store and logic</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide9;