import React from "react";
import "./form.css";
import HomePage from "./intro";
import UserPage from "./user.js";
import LoginUser from "./LoginUser.js";


import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <h1>Blog Website ContactPage</h1>
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

      <div className="form">
        <p style={{ textAlign: "center" }}>
          We'd love to hear from you! Please use the form below to get in touch,
          or find our details below.
        </p>
      </div>

      <div className="form">
        <h2>Send us a message!</h2>
        <div className="formElements">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle submit here
            }}
          >
            <div>
              <label htmlFor="name">Name:<br /></label>
              <input type="text" id="name" name="user_name" required />
            </div>

            <div>
              <label htmlFor="mail">E-mail:<br /></label>
              <input type="email" id="mail" name="user_email" required />
            </div>

            <div>
              <label htmlFor="msg">Message:<br /></label>
              <textarea
                id="msg"
                name="user_message"
                rows="10"
                cols="40"
                required
              ></textarea>
            </div>

            <div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <div className="form">
        <h2>Our Details</h2>
        <address>
          <p><strong>Blog Website</strong></p>
          <p>
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1 (309) 202-81910</a>
          </p>
          <p>
            Follow us on:{" "}
            <a href="https://socialmedia.com" target="_blank" rel="noreferrer">
              Social Media
            </a>
          </p>
        </address>
      </div>

      <footer>
        <p>&copy; 2026 Blog Website</p>
      </footer>
    </div>
  )
};

export default ContactPage;