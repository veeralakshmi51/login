import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { GrOrganization } from "react-icons/gr";
import userImage from "./photo.png";
import "./App.css";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src={userImage}
          alt="User"
          style={{
            width: "100vh",
            height: "100vh",
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1 style={{ color: "black", left: "10px", marginBottom: "20px" }}>
            Welcome Back!{" "}
          </h1>
          <h2 style={{ color: "grey", marginTop: "20px" }}>
            Login to your account
          </h2>
          <div
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "10px",
              fontSize: "20px",
            }}
          >
            <label htmlFor="username" style={{fontSize:'20px'}}>Username:</label>
            <FaUser
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "20px",
              }}
            />
            <input
              style={{
                width: "calc(100% - 35px)",
                padding: "10px",
                paddingLeft: "40px",
                margin: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              type="text"
              placeholder="Enter username"
              required
            />
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <label htmlFor="password" style={{fontSize:'20px'}}>Password:</label>
            <FaLock
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "20px",
              }}
            />
            <input
              style={{
                width: "calc(100% - 35px)",
                padding: "10px",
                paddingLeft: "40px",
                margin: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <label htmlFor="organization" style={{fontSize:'20px', marginLeft:'10px', marginRight:'5px'}}>Organization:</label>
            <GrOrganization
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "20px",
              }}
            />
            <input
              style={{
                width: "calc(100% - 35px)",
                padding: "10px",
                paddingLeft: "40px",
                margin: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              type="select"
              placeholder="Select  Organization"
              required
            />
          </div>
          <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px", 
  }}
>
  <div style={{ display: "flex", alignItems: "center" }}>
    <input
      type="checkbox"
      style={{ marginLeft: "10px", marginRight: "5px" }}
    />
    <span style={{ color: "black" }}>Remember Me  -</span>{''}
  </div>
  <a href="/forgot-password" style={{ color: "blue" }}>
    {' '} Forgot Password?
  </a>
</div>

          <button
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px",
              backgroundColor: "darkblue",
              color: "white",
              borderRadius: "5px",
              border: "1px solid #ccc",
              alignContent: "center",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
            }}
            onClick={() => {}}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
