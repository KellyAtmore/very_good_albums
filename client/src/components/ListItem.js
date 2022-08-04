import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <>
      <div>
        <Link to={`/albums/${props.albums.album_id}`}>
          <div className=" bg-seabreeze w-[300px] h-[240px] rounded-lg m-6 p-4 hover:scale-105 transition ease-in-out">
            <img
              className="w-[80px] h-[80px] rounded-lg mb-4"
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
