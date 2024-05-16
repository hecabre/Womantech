import axios from "./axios";

export const getFacultyByIdUam = async (id) => {
  const res = await axios.get(`uam/faculty/${id}`);
  return res;
};
