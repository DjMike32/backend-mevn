import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { db } from "./database.js";
import app from "./app.js";

const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const indexPath = join(__dirname, "../index.html");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/login", (req, res) => {
  console.log("welcome");
});

app.post("/users2", (req, res) => {
  const sql = `INSERT INTO users VALUES(4, ?, ?);`;
  // Reemplazar extend con Object.assign
  const values = Object.assign({}, [req.body.name, req.body.job]);
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
