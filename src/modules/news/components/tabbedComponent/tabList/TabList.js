import React, { Component } from 'react';

import './TabList.css';

class TabList extends Component {
  render() {
    return (
      <div className='tab-list'>
        {this.props.children}
      </div>
    );
  }
}

export default TabList;
