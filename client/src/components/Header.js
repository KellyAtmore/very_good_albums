import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between">
        <div>
          <img className="w-12 h-12" src="../icons/vinyl.png" />
        </div>

        <div>
          <ul className="text-sand tracking-wider text-right ">
            <li>The Albums</li>
            <li>About The Project</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
