import React, { useState } from "react";
import { Button, Pagination, Table, Typography } from "antd";
import type { TableProps } from "antd";
import Register from "./Register";


const Users = () => {
  interface DataType {
    key: string;
    firstName: string;
    lastName: string;
    email: string;
    cellNumber: string;
  }

  const columns: TableProps["columns"] = [
    {
      title: "Firstname",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Lastname",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Cell Number",
      dataIndex: "cellNumber",
      key: "cellNumber",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button type="primary">View</Button>,
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      email: "johnbrown@gmail.com",
      cellNumber: "+27 524 224 4324",
    },
    {
      key: "2",
      firstName: "Kendric",
      lastName: "Lamar",
      email: "kendricLamar@gmail.com",
      cellNumber: "+27 123 456 789",
    },
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      email: "johnbrown@gmail.com",
      cellNumber: "+27 524 224 4324",
    },
    {
      key: "2",
      firstName: "Kendric",
      lastName: "Lamar",
      email: "kendricLamar@gmail.com",
      cellNumber: "+27 123 456 789",
    },
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      email: "johnbrown@gmail.com",
      cellNumber: "+27 524 224 4324",
    },
  ];


  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4  mt-10">
        <div className="flex justify-between items-center mb-10">
        <Typography className="text-2xl">Latest Transactions</Typography>
         <Register />
        </div>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Pagination className="text-right mt-6" defaultCurrent={1} total={50} />
    </div>
  );
};

export default Users;
