import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="pt-40">
        <h1 className="text-[150px] text-rust leading-4 pb-8 tracking-wide">
          VERY GOOD
        </h1>
        <h1 className="text-[150px] text-sand pl-96 tracking-wide">ALBUMS</h1>
        <p className="subline text-sand tracking-wider">
          A curated list of 20 albums that changed music
        </p>
        <div>
          <button className="explore pt-24 text-rust tracking-widest flex items-center">
            <Link to="/albums">Explore the Albums</Link>

            <img
              src="/icons/right-arrow.png"
              className="w-8 pl-2 hover:scale-110 transition ease-in ease-out"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
