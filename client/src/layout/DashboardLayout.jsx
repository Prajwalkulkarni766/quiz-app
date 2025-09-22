import { Layout } from "antd";
import Sidebar from "../components/common/Sidebar";
import { Outlet } from 'react-router-dom';
import AppHeader from "../components/common/AppHeader";

const { Sider, Content } = Layout;

function DashboardLayout({ role = "student" }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>

      <Sider style={{ background: '#fff' }} collapsible width={200}>
        <Sidebar role={role} />
      </Sider>

      <Layout>
        <AppHeader />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout;