import { getFacultyUnam } from "../models/unam.model.js";

export const listFacultyUnam = async (req, res) => {
  const faculty = await getFacultyUnam();
  return res.json({ faculty: faculty });
};
