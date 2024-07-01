import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}/api/`,
<<<<<<< HEAD
  withCredentials: true,
=======
>>>>>>> 554a9d862430e50c897d93df8ada1ed63b446b2f
});

export default instance;
