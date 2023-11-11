import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    month: "Jan",
    income: 20,
  },
  {
    month: "Feb",
    income: 50,
  },
  {
    month: "Mar",
    income: 48,
  },
  {
    month: "Apr",
    income: 38,
  },
  {
    month: "May",
    income: 78,
  },
  {
    month: "Jun",
    income: 42,
  },
  {
    month: "Jul",
    income: 36,
  },
  {
    month: "Aug",
    income: 45,
  },
  {
    month: "Sep",
    income: 72,
  },
  {
    month: "Oct",
    income: 60,
  },
  {
    month: "Nov",
    income: 51,
  },
  {
    month: "Dec",
    income: 58,
  },
];

const IncomeGraph = () => {
  return (
      <AreaChart
        width={550}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -30,
          bottom: 15,
        }}
      >
        <defs>
          <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#b5179e" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#b5179e" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="income"
          stroke="#b5179e"
          fillOpacity={1}
          fill="url(#colorIncome)"
        />
      </AreaChart>
  );
};

export default IncomeGraph;
