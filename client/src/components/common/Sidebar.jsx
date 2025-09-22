import React from "react";
import { Menu } from "antd";
import { DashboardOutlined, FileTextOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar({ role = "student" }) {

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = role === "admin"
    ? [
      { key: "/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
      { key: "/settings", icon: <FileTextOutlined />, label: "Manage Tests" },
    ]
    : [
      { key: "/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
      { key: "/settings", icon: <FileTextOutlined />, label: "My Scores" },
    ];

  return (
    <div style={{ height: "100%", background: "#fff" }}>
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Quiz
      </div>

      <Menu
        mode="inline"
        items={menuItems}
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
      />
    </div>
  )
}

export default Sidebar;