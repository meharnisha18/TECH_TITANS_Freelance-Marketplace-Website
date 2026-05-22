import { Routes, Route } from "react-router-dom";

import Home from "../pages/common/Home";
import Login from "../pages/common/Login";
import Register from "../pages/common/Register";
import About from "../pages/common/About";
import Contact from "../pages/common/Contact";

import AdminLayout from "../layouts/AdminLayout";
import ClientLayout from "../layouts/ClientLayout";
import FreelancerLayout from "../layouts/FreelancerLayout";

import AdminDashboard from "../pages/common/admin/AdminDashboard";
import ManageUsers from "../pages/common/admin/ManageUsers";
import ManageProjects from "../pages/common/admin/ManageProjects";
import ManagePayments from "../pages/common/admin/ManagePayments";
import Reports from "../pages/common/admin/Reports";

import ClientDashboard from "../pages/client/ClientDashboard";
import PostProject from "../pages/client/PostProject";
import MyProjects from "../pages/client/MyProjects";
import ViewProposals from "../pages/client/ViewProposals";
import HireFreelancer from "../pages/client/HireFreelancer";
import ClientProfile from "../pages/client/ClientProfile";

import FreelancerDashboard from "../pages/freelancer/FreelancerDashboard";
import BrowseProjects from "../pages/freelancer/BrowseProjects";
import ProjectDetails from "../pages/freelancer/ProjectDetails";
import SendProposal from "../pages/freelancer/SendProposal";
import MyProposals from "../pages/freelancer/MyProposals";
import MyWorks from "../pages/freelancer/MyWorks";
import FreelancerProfile from "../pages/freelancer/FreelancerProfile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="projects" element={<ManageProjects />} />
        <Route path="payments" element={<ManagePayments />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      <Route path="/client" element={<ClientLayout />}>
        <Route index element={<ClientDashboard />} />
        <Route path="post-project" element={<PostProject />} />
        <Route path="my-projects" element={<MyProjects />} />
        <Route path="proposals" element={<ViewProposals />} />
        <Route path="hire" element={<HireFreelancer />} />
        <Route path="profile" element={<ClientProfile />} />
      </Route>

      <Route path="/freelancer" element={<FreelancerLayout />}>
        <Route index element={<FreelancerDashboard />} />
        <Route path="browse-projects" element={<BrowseProjects />} />
        <Route path="project/:id" element={<ProjectDetails />} />
        <Route path="send-proposal" element={<SendProposal />} />
        <Route path="my-proposals" element={<MyProposals />} />
        <Route path="my-works" element={<MyWorks />} />
        <Route path="profile" element={<FreelancerProfile />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;