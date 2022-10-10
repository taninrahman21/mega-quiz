import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="bg-slate-800 text-white">
      <nav className="flex w-10/12 mx-auto justify-between items-center py-2">
        <div>
          <h1 className="text-3xl">Mega Quiz</h1>
        </div>
        <div className="text-1xl">
          <Link className="ml-5" to="/">Home</Link>
          <Link className="ml-5" to="/topics">Quiz Topics</Link>
          <Link className="ml-5" to="/statistics">Statistics</Link>
          <Link className="ml-5" to="/blogs">Blogs</Link>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
