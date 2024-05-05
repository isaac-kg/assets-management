import React from "react";
import {Typography } from "antd";
import CustomPieChart from "./CustomPieChart";


const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex gap-6 h-20">
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-60">
          Users
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-60">
          Portfolio
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-60">
          Stats
        </div>
       
      </div>
      <div className="h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-60 ">
          <Typography>Total Assets</Typography>
          <CustomPieChart />
         
     </div>
      
    </div>
  );
};

export default Dashboard;
