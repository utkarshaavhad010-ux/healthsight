import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    alert("Logged out successfully!");
    navigate("/login");
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Student Dashboard</h1>

        <h3>Welcome, Utkarsha 👋</h3>

        <div className="info">
          <p><strong>Name:</strong> Utkarsha Avhad</p>
          <p><strong>Email:</strong> utkarsha@gmail.com</p>
          <p><strong>Mobile:</strong> 9876543210</p>
          <p><strong>Course:</strong> Computer Engineering</p>
        </div>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;