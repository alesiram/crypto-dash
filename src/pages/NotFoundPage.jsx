import React from "react";
import {Link} from 'react-router'

export default function NotFoundPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>
        Oops! the page your looking for does not exist.{" "}
      </p>
      <button style={{padding: '20px 20px', borderRadius: '30px', backgroundColor: 'pink'}}>
        <Link to="/" style={styles.link}>
        Go back home
      </Link>
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    color: "#fff",
  },
  title: {
    fontSize: "72px",
    marginBottom: "20px",
    color: 'red', 
  },
  message: {
    fontSize: "72px",
    marginBottom: "30px",
    color: 'black'
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
    
  },
};
