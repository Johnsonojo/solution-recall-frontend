import { encrypt } from "../../utils";
import axiosPublic from "../baseAxiosMethod/axiosPublic";

const authAPI = {};

authAPI.signupUser = async ({ userDetails }) => {
  try {
    const response = await axiosPublic.post("auth/register", userDetails);
    const { data } = response;
    return data;
  } catch (error) {
    throw error;
  }
};

authAPI.loginUser = async ({ loginDetails }) => {
  try {
    const response = await axiosPublic.post("auth/login", loginDetails);
    const { data } = response;
    // encrypt and store user data
    const { accessToken, refreshToken } = data?.data;
    const session = { accessToken, refreshToken };
    const encryptedData = encrypt(session);
    localStorage.setItem("session", encryptedData);
    return data;
  } catch (error) {
    throw error;
  }
};

export default authAPI;
