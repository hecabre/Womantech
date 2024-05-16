import axios from "./axios";

export const getUniversity = async () => {
  const res = await axios.get("universitys");
  return res;
};

export const getUniversitys = async (id) => {
  const res = await axios.get(`/university/${id}`);
  return res;
};

export const getCareerByid = async (id) => {
  const res = await axios.get(`universitys/${id}`);
  return res;
};

export const getIPNUniversity = async () => {
  const res = await axios.get("ipn/facultys");

  return res;
};

export const getUAMUniversity = async () => {
  const res = await axios.get("uam/facultys");
  return res;
};

export const getUNAMUniversity = async () => {
  const res = await axios.get("UNAM/facultys");
  return res;
};
