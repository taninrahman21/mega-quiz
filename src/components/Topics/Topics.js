import React from 'react';
import {useLoaderData} from "react-router-dom";
import Topic from '../Topic/Topic';

const Topics = () => {
  const {data} = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Select The Topics</h1>
      {
        data.map((topic, idx) => <Topic key={idx} topic={topic}></Topic>)
      }
    </div>
  );
};

export default Topics;