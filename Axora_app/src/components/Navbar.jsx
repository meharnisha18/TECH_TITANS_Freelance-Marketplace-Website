import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>FreelanceHub</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1E293B",
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
};

export default Navbar;