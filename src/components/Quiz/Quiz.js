import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
  const quiz = useLoaderData();
  console.log(quiz)
  return (
    <div>
      <h2>This is quiz compo</h2>
    </div>
  );
};

export default Quiz;