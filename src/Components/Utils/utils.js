import Axios from "axios";

const BASE_URL = "https://rjh-news.herokuapp.com/api";

export const getArticles = async topic => {
  // can also add sort_by and order etc as arguments
  const { data } = await Axios.get(`${BASE_URL}/articles`, {
    params: { topic }
  });
  return data.articles;
};

export const getTopics = async () => {
  const { data } = await Axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticle = async article_id => {
  const { data } = await Axios.get(`${BASE_URL}/articles/${article_id}`);
  return data;
};

export const getComments = async article_id => {
  const { data } = await Axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data;
};
