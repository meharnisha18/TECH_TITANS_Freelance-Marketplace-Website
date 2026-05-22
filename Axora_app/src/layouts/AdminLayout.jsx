import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AdminLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="admin" />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;