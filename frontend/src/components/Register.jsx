import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, TextField, Typography } from "@mui/material";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPass) {
      setError("Passwords don't match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("User successfully registered!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="glass-container">
      <div className="glass-card">
        <Typography variant="h4" className="glass-title">Create Account</Typography>
        <Typography className="glass-subtitle">Sign up to get started</Typography>

        <form onSubmit={handleRegister}>
          <div className="glass-input-wrapper">
            <TextField
              placeholder="Email"
              type="email"
              fullWidth
              variant="standard"
              InputProps={{ disableUnderline: true, className: "glass-input" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="glass-input-wrapper">
            <TextField
              placeholder="Password"
              type="password"
              fullWidth
              variant="standard"
              InputProps={{ disableUnderline: true, className: "glass-input" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="glass-input-wrapper">
            <TextField
              placeholder="Confirm Password"
              type="password"
              fullWidth
              variant="standard"
              InputProps={{ disableUnderline: true, className: "glass-input" }}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>

          <Button className="glass-signup-button" type="submit">
            Sign Up
          </Button>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}
        </form>

        <Typography className="glass-footer">
          Already have an account? <span className="glass-link" onClick={() => navigate("/signIn")}>Login</span>
        </Typography>
      </div>
    </div>
  );
};

export default SignupForm;
