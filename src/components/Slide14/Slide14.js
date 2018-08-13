import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide14.css';

class Slide14 extends Component {
  render() {
    return (
      <div className="Slide14 slide">
        <CenteredSlide>
            <p className="main-point">State is read-only</p>
            <p className="">The only way to change the state is to emit an <strong>action</strong>, an object describing what happened.</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide14;