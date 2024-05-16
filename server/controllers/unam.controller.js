import { getFacultyUnam } from "../models/unam.model.js";
import { getFacultyUNAMById } from "../models/unam.model.js";

export const listFacultyUnam = async (req, res) => {
  const faculty = await getFacultyUnam();
  return res.json({ faculty: faculty });
};
export const facultyUNAMById = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ error: "ID de facultad no proporcionado" });
  const faculty = await getFacultyUNAMById(id);
  return res.json({ faculty: faculty });
};
