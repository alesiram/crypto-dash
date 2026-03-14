import React from "react";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
          padding: "20px 30px",
          gap: "20px",
          backgroundColor: "#574964",
        }}
      >
        <h1
          style={{
            margin: '0px', 
            color: 'white',
          }}
        >
          🚀 Crypto Daily Updates
        </h1>

        <Link
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "lavender",
            fontSize: "30px",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "lavender",
            fontSize: "30px",
          }}
          to="/About"
        >
          About
        </Link>
        <Link
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "lavender",
            fontSize: "30px",
          }}
          to="/Random"
        >
          Random
        </Link>
      </div>
    </nav>
  );
}
