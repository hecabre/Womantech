import { getFacultyUam, getFacultyUAMById } from "../models/Uam.model.js";

export const listFacultyUam = async (req, res) => {
  const faculty = await getFacultyUam();
  return res.json({ faculty: faculty });
};

export const facultyUAMById = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ error: "ID de facultad no proporcionado" });
  const faculty = await getFacultyUAMById(id);
  return res.json({ faculty: faculty });
};
