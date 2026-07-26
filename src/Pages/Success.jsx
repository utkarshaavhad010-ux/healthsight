import "./Success.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

 useEffect(() => {
  const timer = setTimeout(() => {
    navigate("/login");
  }, 5000);

  return () => clearTimeout(timer);
}, [navigate]);

  return (
    <div className="success-container">
      <div className="success-box">
        <div className="checkmark">✓</div>

        <h2>Payment Successful!</h2>

        <p>
          Thank you for registering.
          <br />
          Your admission process has been completed successfully.
        </p>

       <button onClick={() => navigate("/login")}>
  Go to Login
</button>
      </div> 
    </div>
  );
}

export default Success;