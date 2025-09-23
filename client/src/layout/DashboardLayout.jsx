import { Layout } from "antd";
import Sidebar from "../components/common/Sidebar";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/common/AppHeader";
import { useAuth } from "../context/AuthContext";

const { Sider, Content } = Layout;

function DashboardLayout() {
  const { user } = useAuth();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={{ background: "#fff" }} collapsible width={200}>
        <Sidebar role={user?.role || "student"} />
      </Sider>

      <Layout>
        <AppHeader />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
