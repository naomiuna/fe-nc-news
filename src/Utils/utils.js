const formatDates = (articles) => {
  if (Array.isArray(articles)) {
    return articles.map((article) => {
      const date = new Date(article.created_at);
      return { ...article, created_at: date.toDateString() };
    });
  }
  const singleDate = new Date(articles.created_at);
  return { ...articles, created_at: singleDate.toDateString() };
};

export default formatDates;
