export const getAllMembers = async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/members");
  const members = await response.json();

  return members.members;
};

export const getMemberById = async (memberId) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/members/" + memberId
  );

  const member = await response.json();

  return member.member;
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
