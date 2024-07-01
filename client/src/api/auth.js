import axios from "./axios";

export const loginQuery = async (username, password) => {
  try {
    const res = await axios.post("auth/login", {
      username: username,
      password: password,
    });
    return res;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
export const registerQuery = async (username, password) => {
  try {
    const res = await axios.post("auth/register", {
      username: username,
      password: password,
    });
    return res;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const profileQuery = async () => {
  try {
    const res = await axios.get("auth/profile", { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const logoutQuery = async () => {
  try {
    const res = await axios.post("auth/logout");
    return res;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
