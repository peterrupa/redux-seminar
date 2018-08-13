import React, { Component } from 'react';
import './CenteredSlide.css';

class CenteredSlide extends Component {
  render() {
    return (
      <div className="CenteredSlide">
        {this.props.children}
      </div>
    );
  }
}

export default CenteredSlide;
