import React, { Component } from 'react';

import './TabPanel.css';

class TabPanel extends Component {
  render() {
    return (
      <div className={!this.props.active ? 'inactive' : ''}>
        <div className='tab-panel'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TabPanel;