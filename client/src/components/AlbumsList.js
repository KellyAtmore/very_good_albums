import React from "react";
import Header from "./Header";
import ListItem from "./ListItem";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3005/`)
      .then((res) => {
        const data = res.data.rows;
        //const albumid = selected.album_id;
        setAlbums(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="Albums_List">
        <Header />
        <h1 className="text-6xl text-sand pt-20 pb-10">The Albums</h1>
        <div className="flex flex-wrap">
          {albums.map((album) => {
            return <ListItem albums={album}></ListItem>;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AlbumsList;
