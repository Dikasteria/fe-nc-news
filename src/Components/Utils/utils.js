import Axios from "axios";

const BASE_URL = "https://rjh-news.herokuapp.com/api";

export const getArticles = async (topic, sort_by) => {
  // can also add sort_by and order etc as arguments
  const { data } = await Axios.get(`${BASE_URL}/articles`, {
    params: { topic, sort_by }
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

export const postComment = async (body, article_id, author) => {
  console.log(body, article_id, author);
  const { data } = await Axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    {
      body,
      author
    }
  );
  return data;
};
