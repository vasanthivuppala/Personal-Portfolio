import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from "recharts";

import { useState } from "react";

function DsaChart({ onPlatformClick, stats }) {
    if (!stats) {
  return <div>Loading...</div>;
}

const data = [
  {
    platform: "LeetCode",
    problems: stats.leetcode.solved,
    color: "#FF2ED1",
    hoverColor: "#FF8AEF"
  },
  {
    platform: "CodeChef",
    problems: stats.codechef.solved,
    color: "#9D00FF",
    hoverColor: "#D56BFF"
  },
  {
    platform: "Codeforces",
    problems: stats.codeforces.solved,
    color: "#6C63FF",
    hoverColor: "#A8A2FF"
  }
  
];
const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
  data={data}
  onMouseMove={(state) => {
    if (state?.activeTooltipIndex !== undefined) {
      setActiveIndex(state.activeTooltipIndex);
    }
  }}
  onMouseLeave={() => setActiveIndex(-1)}
>
  <XAxis
    dataKey="platform"
    axisLine={false}
    tickLine={false}
  />

 <YAxis
  hide={true}
  axisLine={false}
  tickLine={false}
/>

  <Tooltip
  cursor={{ fill: "transparent" }}
  contentStyle={{
    background: "#2c1d4e",
    border: "1px solid #673a82",
    borderRadius: "12px",
    color: "#fff"
  }}
/>


  <Bar
    dataKey="problems"
    radius={[15, 15, 0, 0]}
    barSize={90}
    onClick={(data) =>
      onPlatformClick(data.platform)
    }
  >
    {data.map((entry, index) => (
      <Cell
        key={index}
        fill={
          activeIndex === index
            ? entry.hoverColor
            : entry.color
        }
      />
    ))}
  </Bar>

</BarChart>
    </ResponsiveContainer >
  );
}

export default DsaChart;