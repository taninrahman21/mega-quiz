import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();
  return (
    <div className="mt-14 mx-auto flex flex-col justify-center">
      <h1 className="text-3xl text-center">
        Statistics of <span className="font-bold text-blue-600">MegaQuiz </span>
      </h1>
      <ResponsiveContainer className='mt-10 mx-auto' width="65%" height={300}>
        <BarChart  data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
