import React, { Component } from 'react';

import TabbedComponent from './components/tabbedComponent/TabbedComponent.js'

import './NewsModule.css';

const data = [
  {
    tabName: 'Science',
    tabPanel: 'Science Tab'
  },
  {
    tabName: 'Technology',
    tabPanel: 'Technology Tab'
  }
];

class NewsModule extends Component {
  render() {
    return (
      <div className='news-module'>
        <TabbedComponent data={data}>
        </TabbedComponent>
      </div>
    );
  }
}

export default NewsModule;
