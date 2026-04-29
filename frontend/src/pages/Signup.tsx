import { useState } from "react";
import API from "../services/api";
import { type User } from "../types";

function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignup = async () => {
    try {
      const res = await API.post<User>("/auth/signup", { email, password });
      console.log(res.data);
      alert("Signup success");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;