import React, { Component } from 'react';

import NewsService from './services/NewsService'

import TabbedComponent from './components/tabbedComponent/TabbedComponent'
import Article from './components/article/Article';

import mapNews from './mappers/mapNews'

import './NewsModule.css';

const topics = [
  'Technology', 
  'Business',
  'Health',
  'Entertainment',
];

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
    this.newsService = new NewsService(process.env.REACT_APP_NEWS_API_KEY);
    this.newsService.fetchNews('science');
  }

  componentWillMount() {
    this.setState({
      tabContent: ''
    })
  }

  async changeTopic(topic) {
    const response = await this.newsService.fetchNews(topic);
    this.setContent(response.articles);
  }

  setContent(data) {
    let articles = [];
    data.forEach((datum, index) => {
      const articleContent = mapNews(datum);
      articles.push((
        <Article key={index} content={articleContent}></Article>
      ));
    });
    this.setState({
      tabContent: articles
    })
  }

  render() {
    return (
      <div className='news-module'>
        <TabbedComponent tabs={topics} content={this.state.tabContent} onTabChange={topic => this.changeTopic(topic)}>
        </TabbedComponent>
      </div>
    );
  }
}

export default NewsModule;
