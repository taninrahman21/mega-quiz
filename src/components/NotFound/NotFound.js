import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='mt-20 flex flex-col justify-center'>
      <h1 className='text-center text-3xl text-blue-700'>This page is not Found!</h1>
      <Link className='mx-auto' to="/home">
        <button className="py-3 px-7 bg-blue-800 rounded-md text-white mt-3 ">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;