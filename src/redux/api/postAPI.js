import baseAxiosMethod from "../baseAxiosMethod";

const postAPI = {};

postAPI.createPost = async ({ postDetails }) => {
  try {
    const response = await baseAxiosMethod.post("post", postDetails);
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};

postAPI.getAllPosts = async () => {
  try {
    const response = await baseAxiosMethod.get("post");
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};

postAPI.getOnePost = async (postId) => {
  try {
    const response = await baseAxiosMethod.get(`post/${postId}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};
export default postAPI;
