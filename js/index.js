(function () {
  // first-class top-level security!
  const apiKey = 'd51b94bb45ae403baec4548136a12a43';
  
  const config = {
    technology: {
      id: 'technology',
      title: 'Технологии'
    },
    business: {
      id: 'business',
      title: 'Бизнес'
    },
    health: {
      id: 'health',
      title: 'Здоровье'
    },
    entertainment: {
      id: 'entertainment',
      title: 'Развлечения',
    }
  };

  new NewsService(apiKey, config);
})();