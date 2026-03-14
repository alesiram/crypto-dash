import React from "react";
import { Link } from "react-router";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p
        style={{
          fontSize: "30px",
        }}
      >
        A crypto API is a bridge allowing software applications to interact with
        blockchain networks or cryptocurrency exchanges to access data (prices,
        balances, transactions) or execute trades.
      </p>

      <p
        style={{
          fontSize: "30px",
        }}
      >
        It enables developers to integrate real-time market data, automate
        trading, and manage digital assets, with common use cases including
        portfolio trackers, analytics tools, and dApps.
      </p>
      <button
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "orange",
          borderRadius: "40px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Link
          style={{ color: "white", fontSize: "20px", textDecoration: "none" }}
          to={"/"}
        >
          Go back
        </Link>
      </button>
    </>
  );
}
