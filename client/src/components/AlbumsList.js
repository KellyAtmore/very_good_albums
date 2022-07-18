import React from "react";
import Header from "./Header";
import ListItem from "./ListItem";
import axios from "axios";
import { useEffect, useState } from "react";

const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3003/`)
      .then((res) => {
        const data = res.data.rows;
        //const albumid = selected.album_id;
        setAlbums(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onClick = () => {};

  return (
    <>
      <div class="Albums_List">
        <Header />
        <h1 className="text-6xl text-sand pt-20 pb-10">The Albums</h1>
        {albums.map((album) => {
          return <ListItem albums={album} onClick={onClick} />;
        })}
      </div>
    </>
  );
};

export default AlbumsList;
