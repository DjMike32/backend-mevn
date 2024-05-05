import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE_NAME,
});
