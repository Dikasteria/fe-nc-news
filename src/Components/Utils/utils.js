import Axios from "axios";

const BASE_URL = "https://rjh-news.herokuapp.com/api/";

getArticles = async () => {
  const { data } = await Axios.get(`${BASE_URL}/articles`);
  return data.articles;
};
