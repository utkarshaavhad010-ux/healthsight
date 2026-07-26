import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    alert("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>

        <p><strong>Address:</strong> Nashik, Maharashtra</p>
        <p><strong>Email:</strong> support@studentapp.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Enter your message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;