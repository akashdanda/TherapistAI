import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [sucMessage, setSucMessage] = useState("");
  const navigate = useNavigate();

  const handleSign = async (e) => {
    e.preventDefault();
    setErrMessage("");
    setSucMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSucMessage("You've successfully signed in!");
      // You can redirect after login here too
      // navigate("/home");
    } catch (error) {
      setErrMessage(error.message);
    }
  };

  return (
    <div className="glass-container">
      <div className="glass-card">
        <Typography variant="h4" className="glass-title">Welcome back</Typography>
        <Typography className="glass-subtitle">Sign in to your account</Typography>

        <form onSubmit={handleSign}>
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

          <Button className="glass-signup-button" type="submit">
            Sign In
          </Button>

          {errMessage && <p className="error-text">{errMessage}</p>}
          {sucMessage && <p className="success-text">{sucMessage}</p>}
        </form>

        <Typography className="glass-footer">
          Don’t have an account?{" "}
          <span className="glass-link" onClick={() => navigate("/register")}>
            Sign up
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default SignIn;
