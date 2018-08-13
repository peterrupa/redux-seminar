import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide6.css';

class Slide6 extends Component {
  render() {
    return (
      <div className="Slide6 slide">
        <CenteredSlide>
            <p className="main-point">Because a developer was <strong>frustated</strong>.</p>
            <img src="/dan.jpeg" style={{width: "300px", height: "300px"}}/>
            <p className="small-text">Dan Abramov, creator of Redux</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide6;