import React, { Component } from 'react';

import './Tab.css';

class Tab extends Component {
  render() {
    return (
      <button className={this.props.active ? 'active' : ''} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Tab;