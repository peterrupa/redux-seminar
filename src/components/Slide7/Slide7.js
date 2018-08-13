import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide7.css';

class Slide7 extends Component {
  render() {
    return (
      <div className="Slide7 slide">
        <CenteredSlide>
            <p className="main-point">Development experience sucks.</p>
            <p className="small-text">(or at least, it used to.)</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide7;