import { getFacultyIpn, getFacultyIpnById } from "../models/ipn.model.js";

export const listFacultyIpn = async (req, res) => {
  const faculty = await getFacultyIpn();
  return res.json({ faculty: faculty });
};
export const facultyIpnById = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ error: "ID de facultad no proporcionado" });
  const faculty = await getFacultyIpnById(id);
  return res.json({ faculty: faculty });
};
