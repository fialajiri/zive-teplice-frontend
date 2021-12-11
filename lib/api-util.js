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
  const news = await response.json();

  return news.news;
};

export const getNewsById = async (newsId) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/news/" + newsId
  );

  const newsItem = await response.json();

  return newsItem.news;
};

export const getAllGalleries = async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/gallery");

  const galeries = await response.json();

  return galeries.galleries;
};

export const getGalleryById = async (galleryId) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/gallery/" + galleryId
  );

  const gallery = await response.json();

  return gallery.gallery;
};

export const getCurrentEvent = async () => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/events/current"
  );

  const event = await response.json();

  return event.event;
}
