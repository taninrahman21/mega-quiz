import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-300 flex flex-col border justify-center items-center h-[400px]">
      <div>
        <h1 className="text-4xl font-bold text-blue-800">Start Your Quiz</h1>
      </div>
      <Link to="/topics">
        <button className="py-3 px-7 bg-blue-800 rounded-md text-white mt-3">Start Now</button>
      </Link>
    </div>
  );
};

export default Home;
