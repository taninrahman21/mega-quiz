import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
  const {logo, name, id } = topic;
  return (
    <div className='bg-gray-100 flex flex-col border px-2 py-4 border-gray-300 rounded-md m-5'>
      <img className='w-2/5' src={logo} alt="" />
      <div>
        <h2 className='text-2xl font-semibold'>{name}</h2>
      </div>
      <Link to={`/topics/${id}`}>
      <button className=" w-full py-2 px-5 bg-blue-800 rounded-md text-white mt-3">Start Quiz</button></Link>
    </div>
  );
};

export default Topic;