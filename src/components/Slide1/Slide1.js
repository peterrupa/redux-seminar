import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide1.css';

class Slide1 extends Component {
  render() {
    return (
      <div className="Slide1 slide">
        <CenteredSlide>
            <p className="header">Redux</p>
            <p className="subheader">A predictable state container for Javascript Apps.</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide1;