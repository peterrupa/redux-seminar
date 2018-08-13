import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide4.css';

class Slide4 extends Component {
  render() {
    return (
      <div className="Slide4 slide">
        <CenteredSlide>
            <img src="/jquery_vs_react.png"/>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide4;