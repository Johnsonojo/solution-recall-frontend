import baseAxiosMethod from "../baseAxiosMethod";

const authAPI = {};

authAPI.signupUser = async ({ userDetails }) => {
  try {
    const response = await baseAxiosMethod.post("auth/register", userDetails);
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};

authAPI.loginUser = async ({ loginDetails }) => {
  try {
    const response = await baseAxiosMethod.post("auth/login", loginDetails);
    const { data } = response;
    localStorage.setItem("token", data?.token);
    return data;
  } catch (error) {
    throw error;
  }
};

export default authAPI;
