require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");

const PORT = process.env.PORT || 3005;

//middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

//ROUTES

//GET ALL ALBUMS
app.get("/albums", async (req, res) => {
  try {
    const albums = await pool.query("SELECT * FROM album;");
    //console.log("albums", albums.rows);
    return res.json(albums.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// app.get("/albums", async (req, res) => {
//   try {
//     const albums = await pool.query("SELECT * FROM album;");

//     return res.json(albums.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

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

app.listen(PORT, () => {
  console.log(`server listening on ${PORT} 🥳`);
});
