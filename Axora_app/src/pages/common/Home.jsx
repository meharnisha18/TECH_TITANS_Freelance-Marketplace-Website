import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FreelancerCard from "../../components/FreelancerCard";
import ProjectCard from "../../components/ProjectCard";

function Home() {
  return (
    <>
      <Navbar />

      <section className="page" style={{ textAlign: "center" }}>
        <h1>Find the Perfect Freelancer for Any Project</h1>
        <p>Hire talented developers, designers, writers and marketers.</p>
        <br />
        <button>Hire Freelancer</button>
      </section>

      <section className="page">
        <h2>Featured Freelancers</h2>
        <FreelancerCard name="Arun Kumar" skill="React Developer" price="500" />
        <FreelancerCard name="Priya S" skill="UI/UX Designer" price="400" />
      </section>

      <section className="page">
        <h2>Latest Projects</h2>
        <ProjectCard
          title="E-commerce Website"
          description="Need online shopping website"
          budget="15000"
        />
      </section>

      <Footer />
    </>
  );
}

export default Home;