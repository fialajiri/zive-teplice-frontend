export const getAllUsers = async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/users");
  const users = await response.json();

  return users.users;
};

export const getUserById = async (userId) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/users/" + userId
  );

  const user = await response.json();

  return user.user;
};

export const getAllNews = async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/news");
  const news = await response.json()
  
  

  return news.news;
}

export const getNewsById = async (newsId) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/news/" + newsId
  );

  const newsItem = await response.json();

  return newsItem.news;
}
