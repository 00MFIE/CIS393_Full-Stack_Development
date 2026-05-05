import React from "react";
import "./user.css";

import HomePage from "./intro";
import ContactPage from "./fourm.js";
import LoginUser from "./LoginUser.js";
import { Link } from "react-router-dom";
import { useLocation, Navigate, useNavigate } from "react-router-dom";


function UserPage() {

  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();

  // If no user data, block access
  if (!user) {
    return <Navigate to="/" />;
  }

  //delete function
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/delete-user/${user.username}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        alert("User deleted successfully");
        navigate("/"); // redirect after delete
      } else {
        alert("User not found");
      }
    } catch (err) {
      alert("Server error");
    }
  };


  return (
    <div>
      <div className="title">
        <h1>Blog Website UserPage</h1>
        <h6>discover latest news and more about people+</h6>
      </div>

      <div className="links">
        <div className="info">
          <p style={{ position: "relative", left: "-80px" }}>
            <Link to="/">Home</Link>
          </p>
          <p style={{ position: "relative", left: "-40px" }}>
            <Link to="/LoginPage">User Pages</Link>
          </p>
          <p style={{ position: "relative", left: "-20px" }}>
            <Link to="/fourmpage">Info + Q&amp;A</Link>
          </p>
        </div>
      </div>


      <img
        className="avatar"
        src="images/avatar.jpg"
        alt="Avatar"
        height="150"
      />

      <div className="desc">
        <h2>Username:</h2>
        <h5>personal details:</h5>
        <h6 style={{ color: "gray", borderBottom: "1px solid #000", width: "50%" }}>
          Full Name:
        </h6>
        <h6 style={{ color: "gray", borderBottom: "1px solid #000", width: "50%" }}>
          Date of Birth:
        </h6>
        <h6 style={{ color: "gray", borderBottom: "1px solid #000", width: "50%" }}>
          Country:
        </h6>
        <h6 style={{ color: "gray", borderBottom: "1px solid #000", width: "50%" }}>
          Join Date:
        </h6>
      </div>

      <div className="username">
        <h2>{user.username}</h2>
      </div>

      <div className="infos">
        <p>{user.name}</p>
        <p style={{ position: "relative", top: "10px" }}>{user.DOB}</p>
        <p style={{ position: "relative", top: "25px" }}>
          {user.Country}
        </p>
        <p style={{ position: "relative", top: "37px" }}>{user.Join}</p>
      </div>

      <div className="About">
        <h3>About Me:</h3>
        <p style={{ fontSize: "12px" }}>
          {user.About}
        </p>
      </div>

      <div className="story">
        <h3>Story:</h3>
        <div className="elements">

          <p
            style={{
              fontSize: "12px",
              position: "relative",
              left: "10px",
            }}
          >
            Test
          </p>
        </div>
      </div>

      <div style={{ marginTop: "20px", }}>
        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "grey",
            color: "white",
            cursor: "pointer",
            border: '1px solid black',
            borderRadius: '5px',
            padding: '20px'
          }}
        >
          Delete Profile
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/edit-user", { state: { user } })}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "20px",
            marginRight: "10px"
          }}
        >
          Edit Profile
        </button>
      </div>

      <footer>
        <p>&copy; 2026 Blog Website</p>
      </footer>
    </div>
  );
};

export default UserPage;