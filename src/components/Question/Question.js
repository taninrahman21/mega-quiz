import React from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = ({quiz}) => {
  const {question, options} = quiz;
  // console.log(question);
  return (
    <div className='border border-gray-200 rounded-md p-4 m-5 w-2/4'>
      <div className='flex justify-between items-center mr-3'>
      <h2 className='mr-3 text-2xl text-blue-500 font-semibold'>{question}</h2>
      <FontAwesomeIcon className='text-2xl' icon={faEye}></FontAwesomeIcon>
      </div>
      <div className='grid grid-cols-2 mt-4'>
      {
        options.map( (option, idx ) => <Option key={idx} option={option}></Option>)
      }
      </div>
    </div>
  );
};

export default Question;