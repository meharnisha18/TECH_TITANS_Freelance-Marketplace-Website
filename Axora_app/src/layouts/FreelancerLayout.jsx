import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function FreelancerLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="freelancer" />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default FreelancerLayout;