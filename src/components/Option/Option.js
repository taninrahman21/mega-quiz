import React from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Option = ({option, correctAnswer}) => {
  const [quizAlert, setQuizAlert] = useState(false);
  const userClickedAnswer = (e) => {
    const clickedAnswer = e.target.value;
    if(clickedAnswer === correctAnswer){
      toast.success("Wooho!Correct Answer!");
    } else {
      toast.error("Ooops!Wrong Answer");
    }
  }
  return (
    <>
    <div className='mb-3 border border-gray-100 mr-4 p-3 bg-gray-100 rounded-md'>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
        <input onClick={userClickedAnswer} className='ml-2' type="radio" value={option} name="option" />
        <label className='ml-2 text-[20px]' htmlFor="option">{option}</label>
      </div>
     <div className={`border bg-gray-300 border-blue-300 rounded-md p-5 text-center w-3/4 md:w-2/4 lg:w-1/3 fixed top-[40%] left-[33%] ${quizAlert ? "block" : "hidden"}`}>
        <h1 className="text-2xl">
          Correct Answer:
        </h1>
        <span className="text-2xl font-semibold block">{correctAnswer}</span>
        <button onClick={() => setQuizAlert(false)} className="py-2 px-10 bg-blue-800 rounded-md text-white mx-auto mt-3">Close</button>
    </div>
    </>
  );
};

export default Option;