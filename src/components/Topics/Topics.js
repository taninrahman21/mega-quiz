import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl text-blue-700 text-center
      mt-5 font-bold">Select The Quiz Topics</h1>
      <div className="grid grid-cols-2 gap-20px items-center w-2/5 mx-auto my-10">
        {data.map((topic, idx) => (
          <Topic key={idx} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
