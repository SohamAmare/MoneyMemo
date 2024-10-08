import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      console.log(res.data.token);
      const tok = res.data.token;

      // const token = res.token;

      localStorage.setItem("authToken", tok); // Store the token in localStorage
      alert("Login successful!", tok);

      // Optionally, call a parent function to refresh the state or redirect
      // onLogin();
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err.message);
      alert("Failed to log in.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
