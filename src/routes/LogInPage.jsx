import React, { useState } from "react";
import { createUserAccount } from "./createaccount";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userGreet, setUserGreet] = useState(null);
  const [confirmpassword, confirmPassword] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleCreateAccount = () => {
    createUserAccount(name, email, password);
    navigate("/SignIn");

    setUserGreet(`Hello, ${name}`);
  };

  return (
    <div style={containerStyle}>
      <b style={{ color: "blue", fontFamily: "sans-serif" }}>
        Create a Dev@Deakin Account
      </b>
      <br />
      <div>
        <label htmlFor="Name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="Email">Email: </label>
        <input
          type="email"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="Password">Password: </label>
        <input
          type="password"
          id="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="Confirm Password">Confirm Password: </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmpassword}
          onChange={(e) => confirmPassword(e.target.value)}
        />
      </div>
      <br />
      <button style={buttonStyle} onClick={handleCreateAccount}>
        Create
      </button>
      {userGreet && <p>{userGreet}</p>}
    </div>
  );
}

export default LoginPage;
