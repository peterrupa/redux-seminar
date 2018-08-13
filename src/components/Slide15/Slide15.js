import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide15.css';

class Slide15 extends Component {
  render() {
    return (
      <div className="Slide15 slide">
        <CenteredSlide>
            <p className="main-point">Changes are made with pure functions</p>
            <p className="">To specify how the state tree is transformed by actions, you write <strong>pure reducers</strong>.</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide15;