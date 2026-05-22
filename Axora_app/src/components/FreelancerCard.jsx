function FreelancerCard({ name, skill, price }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{skill}</p>
      <h4>₹{price}/hr</h4>
      <button>Hire Now</button>
    </div>
  );
}

export default FreelancerCard;