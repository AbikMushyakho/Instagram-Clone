import axios from "axios";
const baseUrl = "http://localhost:3001";

export const getAllUser = async () => {
  const users = await axios.get(`${baseUrl}/persons`);
  return users;
};

export const getUserById = async (id) => {
  const user = await axios.get(`${baseUrl}/persons/${id}`);
  return user;
};

export const getAllPosts = async () => {
  const posts = await axios.get(`${baseUrl}/posts`);
  return posts;
};

export const getPostById = async () => {
  const post = await axios.get(`${baseUrl}/posts/${id}`);
  return post;
};
