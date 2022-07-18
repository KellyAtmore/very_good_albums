import React from "react";
import { useEffect } from "react";
import axios from "axios";

const AlbumPage = (props) => {
  useEffect(() => {
    axios.get(`http://localhost:3003/${props.albums.album_id}`).then((res) => {
      const data = res.data;
    });
  }, []);
  return <></>;
};

export default AlbumPage;
