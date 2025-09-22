import React from "react";
import { Layout, Dropdown, Avatar, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

function AppHeader() {

  const menu = (
    <Menu>
      <Menu.Item key={"profile"} icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key={"logout"} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Header
        style={{
          background: "#fff",
          padding: "0 20px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Dropdown menu={menu} placement="bottomRight">
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <Avatar icon={<UserOutlined />} />
            <span>Ram</span>
          </div>
        </Dropdown>
      </Header>
    </>
  )
}

export default AppHeader;