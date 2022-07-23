import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const AlbumPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3005/albums/${id}`)
      .then((res) => {
        const album = res.data.rows[0];
        setAlbum(album);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Album_Page">
      <Header />
      <h1 className="pb-2 pt-12 album_title text-5xl text-rust w-2/3">
        {album.album_name}
      </h1>
      <div className="flex pb-12">
        <p className="album_details text-rust">
          {album.artist_name} / {album.release_year}
        </p>
      </div>
      <div className="flex pb-24">
        <p className="details text-sand leading-7 text-sm mr-12">
          {album.album_about}
        </p>
        <img className="cover_image" src={album.album_cover} />
      </div>
      <div className="flex">
        <img className="img_1 pr-12" src={album.image_1} />
        <p className="details text-sand text-sm leading-7">
          {album.band_about}
        </p>
      </div>

      <iframe
        className="video"
        src={`https://www.youtube.com/embed/${album.video_url}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <iframe
        className="playlist"
        src={`https://open.spotify.com/embed/album/${album.playlist_url}utm_source=generator`}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default AlbumPage;
