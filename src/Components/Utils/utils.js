import Axios from "axios";

const BASE_URL = "https://rjh-news.herokuapp.com/api";

export const getArticles = async () => {
  const { data } = await Axios.get(`${BASE_URL}/articles`);
  return data.articles;
};

export const getTopics = async () => {
  const { data } = await Axios.get(`${BASE_URL}/topics`);
  return data.topics;
};
