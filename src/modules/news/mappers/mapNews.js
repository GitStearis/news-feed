const mapNews = (datum) => {
  return {
    href: datum.url ,
    image: datum.urlToImage || './default.jpg',
    title: datum.title,
    description : datum.description
  }
};

export default mapNews;