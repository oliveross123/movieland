// src/Components/Footer.js
import React from "react";
import tmdbLogo from "../tmdb.svg"; // Adjust the path to your logo file

const Footer = () => (
  <footer style={footerStyle}>
    <p>
      Data a náhledy filmu poskytuje:{" "}
      <a href="https://www.themoviedb.org">The Movie Database (TMDB)</a>.
    </p>
    <img src={tmdbLogo} alt="TMDB Logo" style={logoStyle} />

    <p>RVLTN, všechny práva vyhrazena. &copy; {new Date().getFullYear()}</p>
  </footer>
);

const footerStyle = {
  textAlign: "center",
  padding: "1rem",
  background: "#222",
  color: "#fff",
};

const logoStyle = {
  marginTop: "1rem",
  width: "100px",
};

export default Footer;
