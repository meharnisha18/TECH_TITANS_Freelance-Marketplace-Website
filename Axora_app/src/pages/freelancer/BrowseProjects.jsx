// BrowseProjects.jsx
import ProjectCard from "../../components/ProjectCard";

function BrowseProjects() {
  return (
    <div className="page">
      <h2>Browse Projects</h2>
      <ProjectCard title="Portfolio Website" description="Need React website" budget="10000" />
    </div>
  );
}

export default BrowseProjects;