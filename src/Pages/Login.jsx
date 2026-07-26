import "./Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter Email and Password.");
      return;
    }

    // Dummy login
    alert("Login Successful!");

    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <div className="login-box">

        <h2>Student Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

          <p>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;