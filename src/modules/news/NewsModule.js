import React, { Component } from 'react';

import NewsService from './services/NewsService.js'

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
  constructor(props) {
    super(props);
    this.newsService = new NewsService(process.env.NEWS_API_KEY);
    this.newsService.fetchNews('science');
  }

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
