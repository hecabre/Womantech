import mysql from "mysql2/promise";

export async function connectDb() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });
    return connection;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
