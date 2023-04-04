import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      name: "Student 1",
      physics: 75,
      chemistry: 85,
      math: 90,
      color:'#ff00ff'
    },
    {
      id: 2,
      name: "Student 2",
      physics: 80,
      chemistry: 70,
      math: 95,
    },
    {
      id: 3,
      name: "Student 3",
      physics: 90,
      chemistry: 80,
      math: 75,
    },
    {
      id: 4,
      name: "Student 4",
      physics: 65,
      chemistry: 75,
      math: 85,
    },
    {
      id: 5,
      name: "Student 5",
      physics: 70,
      chemistry: 90,
      math: 80,
    },
    {
      id: 6,
      name: "Student 6",
      physics: 85,
      chemistry: 65,
      math: 70,
    },
    {
      id: 7,
      name: "Student 7",
      physics: 80,
      chemistry: 90,
      math: 85,
    },
    {
      id: 8,
      name: "Student 8",
      physics: 75,
      chemistry: 85,
      math: 90,
    },
    {
      id: 9,
      name: "Student 9",
      physics: 90,
      chemistry: 70,
      math: 80,
    },
    {
      id: 10,
      name: "Student 10",
      physics: 70,
      chemistry: 75,
      math: 95,
    },
    {
      id: 11,
      name: "Student 11",
      physics: 80,
      chemistry: 85,
      math: 65,
    },
    {
      id: 12,
      name: "Student 12",
      physics: 75,
      chemistry: 90,
      math: 70,
    },
  ];


    

  return (
    <div>
      <div className="mt-10 bg-slate-200 py-5">
     <div style={{width:'25%'}} className=" mx-auto">
      {/* -----------line chart-------------- */}
     <ResponsiveContainer width="100%" height={500}>
     <LineChart data={data}>
          <Line type="monotone" dataKey="math" stroke="#8884d8" />
          <Line type="monotone" dataKey="physics" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
         <Tooltip></Tooltip>
        </LineChart>
     </ResponsiveContainer>
     
     </div>
      </div>
      {/* ---------------pie chart------------------------ */}
      <div  className="mt-10 bg-slate-200">

        <ResponsiveContainer width="100%" height={500} >
        <PieChart width={1000} height={500}>
          <Pie
            dataKey="chemistry"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
        </ResponsiveContainer>


      </div>
    </div>
  );
};

export default Dashboard;
