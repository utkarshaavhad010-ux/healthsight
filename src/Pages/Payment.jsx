import "./Payment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [amount] = useState("500");
  const [method, setMethod] = useState("");

  function handlePayment(e) {
    e.preventDefault();

    if (name === "" || method === "") {
      alert("Please fill all the details.");
      return;
    }

    alert("Payment Successful!");

    navigate("/success");
  }

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2>Student Payment</h2>

        <form onSubmit={handlePayment}>

          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            value={amount}
            readOnly
          />

          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option>UPI</option>
            <option>Debit Card</option>
            <option>Credit Card</option>
            <option>Net Banking</option>
          </select>

          <button type="submit">
            Pay Now
          </button>

        </form>
      </div>
    </div>
  );
}

export default Payment;