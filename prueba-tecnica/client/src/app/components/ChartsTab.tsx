"use client";

import React from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

export default function ChartsTab() {
  return (
    <LineChart width={900} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
}




