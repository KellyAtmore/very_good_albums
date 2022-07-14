const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ROUTES

app.get("/", async (req, res) => {
  try {
    const albums = await pool.query("SELECT * FROM album;");
    console.log("query", albums.rows);

    res.json(albums.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3003, () => {
  console.log("server listening on port 3003 🥳");
});
