import axios from "./axios";

export const getFacultyByIdIpn = async (id) => {
  const res = await axios.get(`ipn/faculty/${id}`);
  return res;
};
