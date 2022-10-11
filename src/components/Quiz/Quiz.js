import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const {data}= useLoaderData();
  const {name, questions} = data;
  return (
    <div>
      <h2 className='text-3xl text-blue-700 font-semibold text-center mt-10'>Start {name} Quizes</h2>
      <div className='flex flex-col justify-center items-center'>
        {
          questions.map(question => <Question key={question.id} quiz={question}></Question>)
        }
      </div>
    </div>
  );
};

export default Quiz;