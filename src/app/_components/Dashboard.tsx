"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Completed", value: 400 },
    { name: "In Progress", value: 300 },
    { name: "Not Started", value: 300 },
  ];

  const progressData = [
    { name: "Week 1", progress: 40 },
    { name: "Week 2", progress: 60 },
    { name: "Week 3", progress: 80 },
    { name: "Week 4", progress: 90 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">User Progress Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg p-4 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">Learning Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                outerRadius={100}
                fill="#8884d8"
                label
                dataKey="value" // Corrected dataKey
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={["#0088FE", "#00C49F", "#FFBB28"][index]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg p-4 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">Learning Curve</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="progress" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
