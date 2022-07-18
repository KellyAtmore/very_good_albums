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
    //console.log("query", albums.rows);

    return res.json(albums);
  } catch (err) {
    console.error(err.message);
  }
});

//GET ONE ALBUM
// app.get("/:albumid", async (req, res) => {
//   try {
//     const album = await pool.query(
//       `SELECT * FROM album WHERE album_id = ${albumid}`
//     );
//     const albumid = req.params.album_id;

//     console.log("THIS IS PARAMS", req.params);

//     console.log("this is album id", album.rows);
//     return res.json(album.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.listen(3003, () => {
  console.log("server listening on port 3003 🥳");
});
