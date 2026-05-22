import { Link } from "react-router-dom";

function Sidebar({ role }) {
  const links = {
    admin: [
      ["Dashboard", "/admin"],
      ["Users", "/admin/users"],
      ["Projects", "/admin/projects"],
      ["Payments", "/admin/payments"],
      ["Reports", "/admin/reports"],
    ],
    client: [
      ["Dashboard", "/client"],
      ["Post Project", "/client/post-project"],
      ["My Projects", "/client/my-projects"],
      ["Proposals", "/client/proposals"],
      ["Profile", "/client/profile"],
    ],
    freelancer: [
      ["Dashboard", "/freelancer"],
      ["Browse Projects", "/freelancer/browse-projects"],
      ["My Proposals", "/freelancer/my-proposals"],
      ["My Works", "/freelancer/my-works"],
      ["Profile", "/freelancer/profile"],
    ],
  };

  return (
    <aside style={styles.sidebar}>
      <h2>{role.toUpperCase()}</h2>
      {links[role].map((item) => (
        <Link key={item[0]} to={item[1]} style={styles.link}>
          {item[0]}
        </Link>
      ))}
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "240px",
    minHeight: "100vh",
    background: "#1E293B",
    padding: "25px",
  },
  link: {
    display: "block",
    margin: "18px 0",
    color: "#F8FAFC",
  },
};

export default Sidebar;