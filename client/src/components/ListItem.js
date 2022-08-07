import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <>
      <div className="list w-[300px] h-[240px] rounded-lg m-6 p-4 hover:scale-105 hover:bg-[#6E8DAC] transition ease-in-out">
        <Link to={`/albums/${props.albums.album_id}`}>
          <div className="">
            <img
              className="w-[90px] h-[90px] rounded-lg mb-4"
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
        </Link>
      </div>
    </>
  );
};

export default ListItem;
