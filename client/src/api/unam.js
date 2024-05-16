import axios from "./axios";

export const getFacultyByIdUnam = async (id) => {
  const res = await axios.get(`unam/faculty/${id}`);
  return res;
};
