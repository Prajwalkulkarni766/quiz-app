import React from "react";
import { Layout, Dropdown, Avatar } from "antd";
import { UserOutlined, LogoutOutlined, BulbOutlined, BulbFilled } from "@ant-design/icons";
import { useTheme } from "../../context/ThemeContext";
import { Switch } from "antd";

const { Header } = Layout;

function AppHeader() {
  const { mode, toggleTheme } = useTheme();

  const menuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
    },
  ];

  return (
    <Header
      style={{
        background: mode === "dark" ? "#001529" : "#fff",
        color: mode === "dark" ? "#fff" : "#000",
        padding: "0 20px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        gap: "10px"
      }}
    >

      <Switch
        checked={mode === "dark"}
        onChange={toggleTheme}
        checkedChildren={<BulbFilled />}
        unCheckedChildren={<BulbOutlined />}
      />

      <Dropdown
        menu={{ items: menuItems }}
        placement="bottomRight"
        trigger={["click"]}
      >
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar icon={<UserOutlined />} />
          <span>Ram</span>
        </div>
      </Dropdown>
    </Header>
  );
}

export default AppHeader;