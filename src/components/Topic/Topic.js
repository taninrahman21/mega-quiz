import React from 'react';

const Topic = ({topic}) => {
  console.log(topic)
  const {logo, name } = topic;
  return (
    <div className='bg-gray-200 flex flex-col border px-2 py-4 border-gray-300 rounded-md m-5'>
      <img className='w-2/5' src={logo} alt="" />
      <div>
        <h2 className='text-2xl font-semibold'>{name}</h2>
      </div>
        <button className="py-2 px-5 bg-blue-800 rounded-md text-white mt-3">Start Quiz</button>
    </div>
  );
};

export default Topic;