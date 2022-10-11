import React from 'react';

const Option = ({option}) => {
  return (
    <div className='mb-3 border border-gray-100 mr-4 p-3 bg-gray-100 rounded-md'>
        <input className='ml-2' type="radio" value="option" name="option" />
        <label className='ml-2 text-[20px]' htmlFor="option">{option}</label>
    </div>
  );
};

export default Option;