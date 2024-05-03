import { db } from "../database.js";

export function getUsers(callback) {
  const sql = "SELECT USER_ID, USER_NAME, USER_JOB FROM users";
  db.query(sql, callback);
}

export function createUser(user, callback) {
  const sql = "INSERT INTO users VALUES (5, ?, ?)";
  db.query(sql, [user.name, user.job], callback);
}
