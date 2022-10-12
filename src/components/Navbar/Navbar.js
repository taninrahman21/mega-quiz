import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-slate-800 text-white">
        <nav className="flex w-10/12 mx-auto justify-between items-center py-2 relative">
          <div>
            <h1 className="text-3xl">Mega Quiz</h1>
          </div>
          <ul className={`text-1xl flex flex-col md:flex-row justify-center items-center absolute w-[100%] md:w-fit py-2 bg-gray-400 duration-500 ease-in rounded-md md:rounded-none z-10 md:bg-slate-800 md:static ${open ? "top-[52px]" : "top-[-150px]"}`}>
            <li className='mr-5'><NavLink
              exact="true"
              className={({ isActive }) =>
              isActive ? " text-red-600 font-bold" : "text-white"
              }
              to="/home"
            >
              Home
            </NavLink></li>
            
            <li className='mr-5'><NavLink
              exact="true"
              className={({ isActive }) =>
              isActive ? " text-red-600 font-bold" : "text-white"
              }
              to="/topics"
            >
              Quiz
            </NavLink></li>
            <li className='mr-5'><NavLink
              exact="true"
              className={({ isActive }) =>
              isActive ? " text-red-600 font-bold" : "text-white"
              }
              to="/statistics"
            >
              Statistics
            </NavLink></li>

            <li className='mr-5'><NavLink
              exact="true"
              className={({ isActive }) =>
                isActive ? " text-red-600 font-bold" : "text-white"
              }
              to="/blogs"
            >
              Blogs
            </NavLink></li>
          </ul>

          <div onClick={() => setOpen(!open)} className="md:hidden text-[20px]">
            {open ? (
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
