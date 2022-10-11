import React, { useState } from "react";
import Option from "../Option/Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Question = ({ quiz }) => {
  const [seeCorrect, setSeeCorrect] = useState(false);
  const { question, options, correctAnswer } = quiz;
  const handleEyeIcon = () => {
    setSeeCorrect(true);
  };
  return (
    <div className="border border-gray-200 rounded-md p-4 m-5 w-2/4 ">
      <div className="flex justify-between items-center mr-3">
        <h2 className="mr-3 text-2xl text-blue-500 font-semibold">
          {question}
        </h2>
        <FontAwesomeIcon
          onClick={handleEyeIcon}
          title="See Correct Answer"
          className="text-2xl"
          icon={faEye}
        ></FontAwesomeIcon>
      </div>

      <div className={`border bg-gray-300 border-blue-300 rounded-md p-5 text-center w-1/3 fixed top-[40%] left-[33%] ${seeCorrect ? "block" : "hidden"}`}>
        <h1 className="text-2xl">
          Correct Answer:
        </h1>
        <span className="text-2xl font-semibold">{correctAnswer}</span>
        <button onClick={() => setSeeCorrect(false)} className={`py-2 px-10 bg-blue-800 rounded-md text-white mx-auto mt-3 ${!seeCorrect ? "hidden" : "block"}`}>Close</button>
      </div>

      <div className="grid grid-cols-2 mt-4">
        {options.map((option, idx) => (
          <Option key={idx} option={option} correctAnswer={correctAnswer}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
