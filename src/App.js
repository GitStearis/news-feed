import React, { Component } from 'react';

import NewsModule from './modules/news/NewsModule';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className='app'>
        <NewsModule>
        </NewsModule>
      </main>
    );
  }
}

export default App;
