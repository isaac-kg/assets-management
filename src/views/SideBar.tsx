import React, { useState } from "react";
import {
  DashboardFilled,
  FundFilled,
  UploadOutlined,
  CopyFilled,
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";

const { Sider, Content } = Layout;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard")

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={false}
        width={250}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        className="flex-row"
      >
        <div>
          <Typography className="text-xl text-white pl-4 my-6">
            PWY Consulting
          </Typography>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardFilled />,
              label: "Dashboard",
              onClick: () => {
                navigate("dashboard");
                setActiveTab("Dashboard")
              },
            },
            {
              key: "2",
              icon: <FundFilled />,
              label: "Portfolio",
              onClick: () => {
                navigate("portfolio");
                setActiveTab("Portfolio")
              },
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Users",
              onClick: () => {
                navigate("users");
                setActiveTab("Users")
              },
            },
            {
              key: "4",
              icon: <CopyFilled />,
              label: "Reports",
              onClick: () => {
                navigate("reports");
                setActiveTab("Report")
              },
            },
          ]}
          className="w-full"
        />
      </Sider>

      <Layout style={{ marginLeft: 250 }}>
        <Header
          className="shadow-xl"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            background: "white",
          }}
        ></Header>
        <Content
          style={{
            padding: 24,
            minHeight: "91vh",
          }}
        >
          <Typography className="mb-6 text-4xl">{activeTab}</Typography>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
