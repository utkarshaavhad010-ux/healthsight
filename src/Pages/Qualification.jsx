import "./Qualification.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Qualification() {
  const navigate = useNavigate();

  const [course, setCourse] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [percentage, setPercentage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      course === "" ||
      college === "" ||
      year === "" ||
      percentage === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    alert("Qualification Details Saved!");

    navigate("/payment");
  }

  return (
    <div className="qualification-container">
      <div className="qualification-box">
        <h2>Qualification Details</h2>

        <form onSubmit={handleSubmit}>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option>Computer Engineering</option>
            <option>Information Technology</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
            <option>Electronics Engineering</option>
          </select>

          <input
            type="text"
            placeholder="College Name"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />

          <input
            type="number"
            placeholder="Passing Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <input
            type="number"
            placeholder="Percentage / CGPA"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />

          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default Qualification;