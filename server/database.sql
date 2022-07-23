CREATE DATABASE very_good_albums;

CREATE TABLE album(
  album_id SERIAL PRIMARY KEY,
  album_name VARCHAR(255),
  artist_name VARCHAR(255),
  release_year INTEGER,
  genre VARCHAR(255),
  album_cover TEXT,
  album_about TEXT,
  image_1 TEXT,
  image_2 TEXT,
  band_about TEXT,
  playlist_url TEXT,
  video_url TEXT,
  song_quote VARCHAR(255),
  band_history TEXT
);