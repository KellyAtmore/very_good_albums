import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const AlbumPage = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  useEffect(() => {
    axios
      .get(`/albums/${id}`)
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

      <div className="flex-row-reverse pt-24 pb-24">
        <p className="quote text-rust">" {album.song_quote} "</p>
        <img className="img_2" src={album.image_2} />
      </div>

      <iframe
        className="video pb-24"
        src={`https://www.youtube.com/embed/${album.video_url}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="flex">
        <iframe
          className="playlist"
          src={`https://open.spotify.com/embed/album/${album.playlist_url}utm_source=generator`}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <p className="history text-sand text-sm leading-7 pb-12 pl-24">
          {album.band_history}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AlbumPage;
