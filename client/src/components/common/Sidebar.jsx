import React from "react";
import { Menu } from "antd";
import { DashboardOutlined, FileTextOutlined, QuestionOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function Sidebar({ role = "student" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode } = useTheme();

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

  const backgroundColor = mode === "dark" ? "#001529" : "#fff";

  return (
    <div style={{ height: "100%", background: backgroundColor }}>
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: 18,
          color: mode === "dark" ? "#fff" : "#000",
        }}
      >
        Quiz
      </div>

      <Menu
        mode="inline"
        items={menuItems}
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        theme={mode === "dark" ? "dark" : "light"}
      />
    </div>
  )
}

export default Sidebar;