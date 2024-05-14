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
