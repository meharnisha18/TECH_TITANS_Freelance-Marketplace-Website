function ProjectCard({ title, budget, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>Budget: ₹{budget}</h4>
      <button>View Details</button>
    </div>
  );
}

export default ProjectCard;