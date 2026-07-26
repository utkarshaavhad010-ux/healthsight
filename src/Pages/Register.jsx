import "./Register.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      mobile === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Registration Successful!");

    navigate("/qualification");
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Student Registration</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Register</button>

          <p>
            Already have an account? <Link to="/">Home</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;