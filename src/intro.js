import React from "react";
import { Link } from "react-router-dom";
import ContactPage from "./fourm.js";
import UserPage from "./user.js";
import LoginUser from "./LoginUser.js";

import Midterm from "./images/midterm.jpg"
import Summer from "./images/summer.webp"
import Dairy from "./images/dairy.jpg"

function HomePage() {
  const boxShadowStyle = {
    boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.5)",
    height: "180px"
  };

  return (
    <div>
      <div className="title">
        <h1>Blog Website HomePage</h1>
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

      <div>
        <h2 className="newsheader">Latest World News</h2>

        <div className="images">
          <img src={Summer} alt="Picture 1" style={boxShadowStyle} />
          <img src={Dairy} alt="Picture 2" style={boxShadowStyle} />
          <img src={Midterm} alt="Picture 3" style={boxShadowStyle} />
        </div>

        <div className="infoHeader">
          <h3>
            20 Summer Vacation Locations <br /> to Visit this Year!
          </h3>
          <h3 style={{ position: "relative", left: "-18px", top: "10px" }}>
            Is dairy healthy for you?
          </h3>
          <h3>
            Midterms coming up
            <br />
            how to study up!
          </h3>
        </div>

        <div className="info">
          <p>
            Summertime, and the living is easy . . . <br />
            but the travel choices can be so hard. <br />
            This is the season when much of the <br />
            world goes into full vacation mode and <br />
            when nearly every type of traveler
          </p>

          <p style={{ position: "relative", left: "20px" }}>
            Dairy can be a healthy part of a <br />
            balanced diet for many providing <br />
            essential nutrients like calcium, <br />
            protein, and vitamin D that support bone <br />
            health and muscle mass. While <br />
            low-fat options are traditionally <br />
            recommended for heart health
          </p>

          <p>
            To study effectively for a midterm,
            <br />
            organize your materials by reviewing <br />
            the syllabus for exam format and key <br />
            topics, then create a study schedule <br />
            that spans several days to avoid <br />
            cramming. Use active learning <br />
            techniques like active recall
          </p>
        </div>
      </div>

      <footer>
        <p>&copy; 2026 Blog Website</p>
      </footer>
    </div>
  );
}

export default HomePage;