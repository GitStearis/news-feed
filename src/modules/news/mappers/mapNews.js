export default mapNews = (datum) => {
  return {
    href: datum.url,
    image: datum.urlToImage,
    title: datum.title,
    description : datum.description
  }
};