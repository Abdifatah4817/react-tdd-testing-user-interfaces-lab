import React from "react";
import profilePic from "./profile.png";
import "./App.css";

function App() {
  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        fontFamily: "Poppins, Arial, sans-serif",
        padding: "30px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#222",
          marginBottom: "20px",
        }}
      >
        Hi, I'm Abdifatah Mursal
      </h1>

      {/* Profile Picture */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #4A90E2",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={profilePic}
            alt="Profile picture of Abdifatah Mursal"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <h2 style={{ color: "#333", marginBottom: "10px" }}>About Me</h2>
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 40px",
          lineHeight: "1.7",
          color: "#555",
        }}
      >
        My name is Abdifatah Mursal, a dedicated and ambitious student pursuing
        a degree in Telecommunication and Information Technology at Kenyatta
        University. I am also studying Software Engineering at Moringa School,
        where I am enhancing my technical and programming skills. My goal is to
        become a skilled software developer, leveraging technology to create
        innovative and efficient solutions that address real-world challenges. I
        am passionate about continuous learning, problem-solving, and
        contributing to the advancement of the tech industry.
      </p>

      <h2 style={{ color: "#333", marginBottom: "10px" }}>Biography</h2>
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 40px",
          lineHeight: "1.7",
          color: "#555",
        }}
      >
        Abdifatah Mursal is a passionate technology enthusiast currently
        pursuing a degree in Telecommunication and Information Technology at
        Kenyatta University. Alongside his university studies, he is also
        enrolled at Moringa School, where he is specializing in Software
        Engineering to strengthen his programming and development skills.
        Abdifatah is deeply interested in exploring how software can drive
        innovation, improve connectivity, and solve real-world problems. With a
        strong commitment to learning and growth, he aspires to build a
        successful career as a software developer, contributing to the
        advancement of technology and digital transformation in his community
        and beyond.
      </p>

      <div style={{ marginTop: "20px" }}>
        <a
          href="https://github.com/Abdifatah4817"
          target="_blank"
          rel="noreferrer"
          style={{
            margin: "10px",
            textDecoration: "none",
            backgroundColor: "#24292f",
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
          }}
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/abdifatah-mursal"
          target="_blank"
          rel="noreferrer"
          style={{
            margin: "10px",
            textDecoration: "none",
            backgroundColor: "#0077b5",
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
          }}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;
