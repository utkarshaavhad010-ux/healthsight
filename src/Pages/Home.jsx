import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h2>Student Management System</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      <div className="hero">
        <h1>Welcome to Student Management System</h1>

        <p>
          Manage student registration, qualification details and payment
          securely using our portal.
        </p>

        <Link to="/register">
          <button>Register Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;