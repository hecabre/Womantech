import { connectDb } from "../db.js";

export const getFacultyUam = async () => {
  const con = await connectDb();
  try {
    const [faculty] = await con.execute(
      "SELECT * FROM facultades WHERE id_universidad = ?",
      [3]
    );
    return faculty;
  } catch (e) {
    console.log(e);
    return null;
  } finally {
    await con.end();
  }
};

export const getFacultyUAMById = async (id) => {
  const query = `
  SELECT carreras.id, 
         facultades.id AS id_facultad,
         facultades.nombre AS nombre_facultad,
         carreras.nombre AS nombre_carrera, 
         carreras.aciertos, 
         carreras.programa_academico, 
         carreras.objetivo, 
         facultades.direccion, 
         facultades.imagen, 
         universidades.nombre AS nombre_universidad
  FROM carreras
  JOIN facultades ON carreras.facultad_id = facultades.id
  JOIN universidades ON facultades.id_universidad = universidades.id
  WHERE facultades.id = ?
`;
  const con = await connectDb();
  try {
    const [faculty] = await con.execute(query, [id]);
    console.log(faculty);
    return faculty;
  } catch (e) {
    console.log(e);
    return null;
  } finally {
    await con.end();
  }
};
