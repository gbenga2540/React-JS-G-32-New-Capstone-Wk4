import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "January",
    visits: 8000,
    times: 7000,
  },
  {
    month: "Feburary",
    visits: 9000,
    times: 6420,
  },
  {
    month: "March",
    visits: 3000,
    times: 700,
  },
  {
    month: "April",
    visits: 7200,
    times: 5000,
  },
];

const Bchart = () => {
  return (
    <div>
      <div className="border shadow-lg rounded me-4 p-3 text-center">
        <p>Monthly Visitors</p>
        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer>
            <BarChart
              width={300}
              height={200}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visits" fill="#8884d8" />
              <Bar dataKey="times" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Bchart;
