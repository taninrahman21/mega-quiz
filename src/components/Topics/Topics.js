import React from "react";
import { useEffect, useState } from "react";
import Topic from "../Topic/Topic";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect( () => {
    fetch('https://openapi.programming-hero.com/api/quiz')
    .then(res => res.json())
    .then(data => setTopics(data.data))
  }, [])

  console.log(topics);
  return (
    <div>
      <h1 className="text-3xl text-blue-700 text-center
      mt-5 font-bold">Select The Quiz Topics</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-20px items-center w-2/4 mx-auto my-4 lg:my-10">
     {
        topics.map(topic => <Topic
           key={topic.id} 
           topic={topic}
           ></Topic>)
      }
     </div>
    </div>
  );
};

export default Topics;
