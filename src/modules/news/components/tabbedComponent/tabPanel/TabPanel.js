import React, { Component } from 'react';

import './TabPanel.css';

class TabPanel extends Component {
  render() {
    return (
      <div className='tab-panel'>
        {this.props.children}
      </div>
    );
  }
}

export default TabPanel;