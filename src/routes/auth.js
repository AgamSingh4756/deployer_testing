import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth, googleProvider } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      navigate("/ ");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("");
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const signUpLinkStyle = {
    textDecoration: "none",
  };

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div>
      <div style={{ textAlign: "right", fontSize: "18px", fontFamily: "sans-serif" }}>
        <a href="LoginPage" style={signUpLinkStyle}>Sign up</a>
        <br></br>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", fontFamily: "sans-serif" }}>
        <div>
          <br></br>
          <label><b>Your Email: </b></label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <br></br>
          <label><b>Your Password: </b></label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <br></br>
          <button onClick={signIn} style={buttonStyle}>Login</button>
        </div>
      </div>
    </div>
  );
};
