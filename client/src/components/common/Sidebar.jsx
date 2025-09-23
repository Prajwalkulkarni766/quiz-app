import React from "react";
import { Menu } from "antd";
import { DashboardOutlined, FileTextOutlined, QuestionOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar({ role = "student" }) {

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = role === "admin"
    ? [
      { key: "/admin", icon: <DashboardOutlined />, label: "Dashboard" },
      { key: "/admin/tests", icon: <FileTextOutlined />, label: "Manage Tests" },
      { key: "/admin/create-test", icon: <FileTextOutlined />, label: "Create Tests" },
      { key: "/admin/add-question", icon: <FileTextOutlined />, label: "Add question" },
    ]
    : [
      { key: "/student", icon: <DashboardOutlined />, label: "Dashboard" },
      { key: "/student/scores", icon: <FileTextOutlined />, label: "My Scores" },
      { key: "/student/test", icon: <QuestionOutlined />, label: "Test" },
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