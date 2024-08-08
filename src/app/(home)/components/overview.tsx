"use client";

import { useState, useEffect } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { GetFormStats } from "../../../../actions/form";

interface ChartData {
  name: string;
  value: number;
}

export function Overview() {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const stats = await GetFormStats();
        
        const chartData: ChartData[] = [
          { name: "Visits", value: stats.visits },
          { name: "Submissions", value: stats.submissions },
          { name: "Submission Rate", value: stats.submissionRate },
          { name: "Bounce Rate", value: stats.bounceRate },
        ];

        setData(chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  );
}
