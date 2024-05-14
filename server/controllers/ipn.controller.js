import { getFacultyIpn } from "../models/ipn.model.js";

export const listFacultyIpn = async (req, res) => {
  const faculty = await getFacultyIpn();
  return res.json({ faculty: faculty });
};
