import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function Random() {
  const [dog, setDog] = useState(null);
  const API_URL = "https://dog.ceo/api/breeds/image/random";

  async function getDog() {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("error inside Random");
      }
      const data = await res.json();
      setDog(data);
      console.log("this the dog", data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getDog();
  }, []);

  if (!dog) {
    return (
      <div
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Loading the dog...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        margin: 0,
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Cute DOGS</h1>

      <img
        src={dog.message}
        alt="Random dog"
        style={{
          margin: '0', 
          padding:' 0',
          border: "15px solid pink",
          width: "300px",
          maxWidth: "80%",
          borderRadius: "10px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={getDog}
          style={{
            backgroundColor: "#baffc9",
            padding: "15px 32px",
            fontSize: "15px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          get new dog
        </button>

        <Link
          to="/"
          style={{
            backgroundColor: "#bae1ff",
            padding: "15px 32px",
            fontSize: "15px",
            borderRadius: "20px",
            textDecoration: "none",
            color: "black",
          }}
        >
          go Home
        </Link>
      </div>
    </div>
  );
}