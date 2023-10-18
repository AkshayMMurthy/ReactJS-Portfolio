import React from "react";


import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
      
        <h2> Hi My Name is Akshay Murthy</h2>
        <div className="prompt">
          <p>A passionate Web Developer currently learning MERN stack.</p>

        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,ExpressJS,
              MySQL, MongoDB, DynamoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;