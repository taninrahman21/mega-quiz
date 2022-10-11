import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="bg-slate-800 text-white">
      <nav className="flex w-10/12 mx-auto justify-between items-center py-2">
        <div>
          <h1 className="text-3xl">Mega Quiz</h1>
        </div>
        <div className="text-1xl">
          <NavLink exact="true" className={({isActive}) => isActive ? " text-orange-600 ml-5":" text-white ml-5"} to="/home">Home</NavLink>
          <NavLink exact="true" className={({isActive}) => isActive ? " text-orange-600 ml-5":" text-white ml-5"} to="/topics">Quiz Topics</NavLink>
          <NavLink exact="true" className={({isActive}) => isActive ?" text-orange-600 ml-5":" text-white ml-5"} to="/statistics">Statistics</NavLink>
          <NavLink exact="true" className={({isActive}) => isActive ?" text-orange-600 ml-5":" text-white ml-5"} to="/blogs">Blogs</NavLink>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
