import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between">
        <div>
          <Link to="/">
            <img className="w-12 h-12" src="../icons/vinyl.png" />
          </Link>
        </div>

        <div>
          <ul className="text-sand tracking-wider text-right ">
            <li>
              <Link to="/albums">The Albums</Link>
            </li>
            {/* <li>
              <Link to="/about">About The Project</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
