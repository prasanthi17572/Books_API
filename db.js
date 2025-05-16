import mysql from 'mysql2';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'booksDB'
}).promise();

export async function runQuery(sql, params = []) {
  try {
    const [rows] = await db.query(sql, params);
    return rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw err;
  }
}
