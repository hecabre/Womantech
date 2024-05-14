import { getFacultyUam } from "../models/Uam.model.js";

export const listFacultyUam = async (req, res) => {
  const faculty = await getFacultyUam();
  return res.json({ faculty: faculty });
};
