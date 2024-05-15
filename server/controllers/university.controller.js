import {
  obtainUnivertsityDegree,
  obtainUnivertsityDegreeById,
  getCareerByid,
} from "../models/university.model.js";

export const getUniversityById = async (req, res) => {
  const { id } = req.body;
  if (!id) return "No existe la universidad";
  const university = await obtainUnivertsityDegreeById(id);
  return res.json({ university: university });
};

export const getUniversitys = async (req, res) => {
  const universitys = await obtainUnivertsityDegree();
  return res.json({ universitys: universitys });
};

export const getCareerId = async (req, res) => {
  const { id } = req.params;
  if (!id) return "No existe la carrera";
  const career = await getCareerByid(id);
  return res.json({ carrer: career });
};
