(function () {
  // first-class top-level security!
  const apiKey = 'd51b94bb45ae403baec4548136a12a43';
  
  const config = {
    technology: {
      id: 'technology',
      title: 'Technology'
    },
    business: {
      id: 'business',
      title: 'Business'
    },
    health: {
      id: 'health',
      title: 'Health'
    },
    entertainment: {
      id: 'entertainment',
      title: 'Entertainment',
    }
  };

  new NewsService(apiKey, config);
})();