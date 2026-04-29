import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// @ts-ignore
import Signup from "./pages/Signup";
// @ts-ignore
import Login from "./pages/Login";
// @ts-ignore
import Projects from "./pages/Projects";
// @ts-ignore
import Metrics from "./pages/Metrics";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Basic connectivity check to your Spring Boot /test endpoint
    axios.get("http://localhost:8080/test")
      .then(res => setMessage(res.data))
      .catch(err => console.error("Backend connection failed:", err));
  }, []);

  return (
    
    <Router>
      <h1>App working</h1>
      <nav style={{ padding: "10px", background: "#f0f0f0", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Login</Link>
        <Link to="/signup" style={{ marginRight: "10px" }}>Signup</Link>
        <Link to="/projects" style={{ marginRight: "10px" }}>Projects</Link>
        <Link to="/metrics">Metrics</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <p>Backend Status: <strong>{message || "Connecting..."}</strong></p>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;