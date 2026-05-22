// PostProject.jsx
import { useState } from "react";
import { createProject } from "../../services/projectService";

function PostProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    budget: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProject(form);
    alert("Project posted");
  };

  return (
    <div className="page">
      <h2>Post Project</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Project Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
        <input placeholder="Budget" onChange={(e) => setForm({ ...form, budget: e.target.value })} />
        <input placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <button>Post</button>
      </form>
    </div>
  );
}

export default PostProject;