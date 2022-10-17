import axiosPrivate from "../baseAxiosMethod/axiosPrivate";

const postAPI = {};

postAPI.createPost = async ({ postDetails }) => {
  try {
    const response = await axiosPrivate.post("post", postDetails);
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};

postAPI.getAllPosts = async () => {
  try {
    const response = await axiosPrivate.get("post");
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};

postAPI.getOnePost = async (postId) => {
  try {
    const response = await axiosPrivate.get(`post/${postId}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};

postAPI.updatePost = async ({ postId, postDetails }) => {
  try {
    const response = await axiosPrivate.put(`post/${postId}`, postDetails);
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};

postAPI.deletePost = async (postId) => {
  try {
    const response = await axiosPrivate.delete(`post/${postId}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};

export default postAPI;
