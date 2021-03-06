import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  //console.log("albumid", props.albums.album_id);

  return (
    <>
      <div>
        <div
          onClick={props.onClick}
          className="h-24 p-4 mb-10 bg-seabreeze w-100% rounded-lg flex items-center justify-between"
        >
          <img
            className="w-[80px] h-[80px] rounded-lg"
            src={props.albums.album_cover}
          />
          <p className="album_list_details text-sand">
            {props.albums.album_name}
          </p>
          <p className="album_list_details text-sand">
            {props.albums.artist_name}
          </p>
          <p className="album_list_details text-sand">
            {props.albums.release_year}
          </p>
          <p className="album_list_details text-sand">{props.albums.genre}</p>
        </div>
      </div>
    </>
  );
};

export default ListItem;
