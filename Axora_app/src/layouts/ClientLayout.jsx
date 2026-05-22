import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function ClientLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="client" />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default ClientLayout;