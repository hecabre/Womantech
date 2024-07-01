import { connectDb } from "../db.js";

export const obtainUnivertsityDegreeById = async (id) => {
  const query = `
        SELECT 
            carreras.id AS carrera_id,
            carreras.nombre AS carrera_nombre,
            carreras.aciertos,
            carreras.programa_academico,
            carreras.objetivo,
            facultades.nombre AS facultad_nombre,
            universidades.nombre AS universidad_nombre
        FROM 
            carreras
        JOIN 
            facultades ON carreras.facultad_id = facultades.id
        JOIN 
            universidades ON facultades.id_universidad = universidades.id
        WHERE 
            universidades.id = ?
    `;
  const con = await connectDb();
  try {
    const [degree] = await con.execute(query, [parseInt(id)]);
    return degree;
  } catch {
    return null;
  } finally {
    await con.end();
  }
};

export const obtainUnivertsityDegree = async () => {
  const query = `
  SELECT 
  carreras.id AS carrera_id,
  carreras.nombre AS carrera_nombre,
  carreras.aciertos,
  carreras.programa_academico,
  carreras.objetivo,
  facultades.nombre AS facultad_nombre,
  facultades.imagen AS facultad_img,
  universidades.nombre AS universidad_nombre
  FROM 
    carreras
  JOIN 
    facultades ON carreras.facultad_id = facultades.id
  JOIN 
    universidades ON facultades.id_universidad = universidades.id
  WHERE 
    universidades.id IN (1, 2, 3)`;
  const con = await connectDb();
  try {
    const [degree] = await con.execute(query);
    return degree;
  } catch {
    return null;
  } finally {
    await con.end();
  }
};

export const getCareerByid = async (id) => {
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
            WHERE carreras.id = ?
        `;
  const con = await connectDb();
  try {
    const [career] = await con.execute(query, [id]);
    return career;
  } catch {
    return null;
  } finally {
    await con.end();
  }
};

export const getFaculty = async (id) => {
  const con = await connectDb();
  console.log("el id" + id);
  const query = `
  SELECT facultades.id, facultades.nombre AS nombre_facultad, facultades.direccion, facultades.imagen, universidades.nombre AS nombre_universidad
  FROM facultades
  JOIN universidades ON facultades.id_universidad = universidades.id
  WHERE universidades.id = ?
`;
  try {
    const [faculty] = await con.execute(query, [id]);
    return faculty;
  } catch (e) {
    console.log(e);
    return null;
  } finally {
    await con.end();
  }
};
