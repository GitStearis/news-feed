import React, { Component } from 'react';

import NewsService from './services/NewsService'

import TabbedComponent from './components/tabbedComponent/TabbedComponent'
import Article from './components/article/Article';
import Loader from './components/loader/Loader';

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
    this.clearContent();
  }

  clearContent() {
    this.setState({
      tabContent: ''
    });
  }

  async changeTopic(topic) {
    this.clearContent();
    this.isLoading = true;
    const response = await this.newsService.fetchNews(topic);
    this.isLoading = false;
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
          {this.isLoading && <Loader />}
        </TabbedComponent>
      </div>
    );
  }
}

export default NewsModule;
