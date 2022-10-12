import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Logo from "../../../src/logo.png";
import Topic from "../Topic/Topic";
import './Home.css';

const Home = () => {
  const topics = useLoaderData();
  const {data} = topics;
  return (
    <div >
    <div className="bg-slate-300 flex flex-col border justify-center items-center h-[450px]">
     
    <div>
        <img className="w-[150px] ml-12 Site-logo" src={Logo} alt="" />
        <h1 className="text-4xl font-bold text-blue-800">Start Your Quiz</h1>
      </div>
      <div>
        <p className="text-center">Here you can cheack your skill by answering many <br /> many topics of quiz.So lets Start.</p>
      </div>
      <Link to="/topics">
        <button className="py-3 px-7 bg-blue-800 rounded-md text-white mt-3">Start Now</button>
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-20px items-center w-3/4 mx-auto my-4 lg:my-10">
        {data.map((topic, idx) => (
          <Topic key={idx} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
