import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide3.css';

class Slide3 extends Component {
  render() {
    return (
      <div className="Slide3 slide">
        <CenteredSlide>
            <p className="">Storing data in our html is <strong>never</strong> a good idea.</p>
            <p>We want them in our Javascript, for our client frameworks (React, Vue, etc) to use for display our data.</p>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide3;