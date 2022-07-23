require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ROUTES

//GET ALL ALBUMS
app.get("/", async (req, res) => {
  try {
    const albums = await pool.query("SELECT * FROM album;");

    return res.json(albums);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/albums", async (req, res) => {
  try {
    const albums = await pool.query("SELECT * FROM album;");

    return res.json(albums.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//GET ONE ALBUM
app.get("/albums/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const album = await pool.query(
      `SELECT * FROM album WHERE album_id = ${id};`
    );

    return res.json(album);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3005, () => {
  console.log("server listening on port 3005 🥳");
});
