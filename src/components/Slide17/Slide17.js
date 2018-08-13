import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';

import './Slide17.css';

class Slide17 extends Component {
  render() {
    return (
      <div className="Slide17 slide">
        <CenteredSlide>
            <p>References:</p>
            <p className="small-text">Redux Docs</p>
            <a className="small-text" href="http://redux.js.org/docs/introduction/">http://redux.js.org/docs/introduction/</a>
            <p className="small-text">Dan Abramov - Live React: Hot Reloading with Time Travel at react-europe 2015</p>
            <a className="small-text" href="https://www.youtube.com/watch?v=xsSnOQynTHs">https://www.youtube.com/watch?v=xsSnOQynTHs</a>
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide17;