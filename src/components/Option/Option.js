import React from 'react';
import { useState } from 'react';

const Option = ({option, correctAnswer}) => {
  const [quizAlert, setQuizAlert] = useState(false);
  const userClickedAnswer = (e) => {
    const clickedAnswer = e.target.value;
    if(clickedAnswer === correctAnswer){
      alert("Your answer is correct!");
    } else {
      setQuizAlert(true);
      alert("Your given answer is wrong!")
    }
  }
  return (
    <>
    <div className='mb-3 border border-gray-100 mr-4 p-3 bg-gray-100 rounded-md'>
        <input onClick={userClickedAnswer} className='ml-2' type="radio" value={option} name="option" />
        <label className='ml-2 text-[20px]' htmlFor="option">{option}</label>
      </div>
     <div className={`border bg-gray-300 border-blue-300 rounded-md p-5 text-center w-1/3 fixed top-[40%] left-[33%] ${quizAlert ? "block" : "hidden"}`}>
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