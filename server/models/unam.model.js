import { connectDb } from "../db.js";

export const getFacultyUnam = async () => {
  const con = await connectDb();
  try {
    const [faculty] = await con.execute(
      "SELECT * FROM facultades WHERE id_universidad = ?",
      [2]
    );
    return faculty;
  } catch {
    console.log(e);
    return null;
  } finally {
    await con.end();
  }
};
