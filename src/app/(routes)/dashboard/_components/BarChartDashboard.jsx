import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BarChartDashboard({ budgetList }) {
  return (
    <div className="border rounded-xl p-6 shadow-md">
      <h2 className="font-bold text-lg">Activity</h2>
      <ResponsiveContainer width={"80%"} height={300}>
        <BarChart data={budgetList} margin={{ top: 7 }}>
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalSpend" stackId="a" fill="#242424" />
          <Bar dataKey="amount" stackId="a" fill="#c3c2FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


