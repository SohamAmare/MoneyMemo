import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });

      alert("User registered successfully! You can now log in.");
      navigate("/login");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err.message);
      alert("Failed to register user.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
