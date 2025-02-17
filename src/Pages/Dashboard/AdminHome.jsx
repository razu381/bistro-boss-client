import React from "react";
import useAuthData from "../../Hooks/useAuthData";
import useCheckAdmin from "../../Hooks/useCheckAdmin";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  Legend,
} from "recharts";

function AdminHome() {
  let { user } = useAuthData();
  let [isAdmin] = useCheckAdmin();
  let { data: stats = {} } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      let stats = await axiosSecure("/admin-stats");
      return stats?.data;
    },
  });
  console.log(stats);

  let { data: categoryData } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      let category = await axiosSecure("/admin-stats-pipeline");
      return category.data;
    },
  });

  let pieData = [];
  if (categoryData) {
    pieData = categoryData.map((item) => ({
      name: item.category,
      value: item.quantity,
    }));
    console.log(pieData);
  }

  const data = [
    { name: "Items", value: 400 },
    { name: "Users", value: 300 },
    { name: "Orders", value: 200 },
    { name: "Revenue", value: 500 },
  ];

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Function to define a custom shape (Triangle Bar)
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height} L${x + width / 2},${y} L${x + width},${
      y + height
    } Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //pie chart:
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <h2 className="text-2xl">
        Welcome to our dashboard {user && isAdmin ? user.displayName : ""}
      </h2>
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Items</div>
          <div className="stat-value">{stats.productCount}</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">{stats.userCount}</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orderCount}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Revenue</div>
          <div className="stat-value text-secondary">
            {stats.totalRevenue?.totalRevenue}
          </div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>
      </div>

      <div className="flex gap-10">
        {/* start of pychart */}
        <div>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" shape={<TriangleBar />} fill="#8884d8">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>
        {/* start of pie chart */}
        <div>
          <PieChart width={500} height={500}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
