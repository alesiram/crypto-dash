import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function MoreDetails() {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);

  const SINGLE_CRYPTO = `https://api.coingecko.com/api/v3/coins/${id}`;

  useEffect(() => {
    async function getCrypto() {
      try {
        const res = await fetch(SINGLE_CRYPTO);
        if (!res.ok) {
          throw new Error("error inside MoreDetails");
        }
        const data = await res.json();
        setCrypto(data);
        console.log("Single Crypto: ", data);
      } catch (error) {
        console.log(error.message);
      }
    }

    getCrypto();
  }, [id]);

  if (!crypto) return <p>Loading...</p>;

  return (
    <>
      <h1>
        More Details About: <b style={{ color: "red" }}>{crypto.id}</b>
      </h1>

      <p>
        <b>Market Cap: </b>
        {crypto.market_data?.market_cap?.usd}
      </p>

      <p>
        <b>Last Updated: </b>
        {crypto.last_updated}
      </p>

      <p>
        <b>Change Percentage: </b>
        {crypto.market_data?.price_change_percentage_24h}
      </p>

      <p>
        <b>Market Rank: </b>
        {crypto.market_cap_rank}
      </p>

      <p>
        <b>High 24h: </b>
        {crypto.market_data?.high_24h?.usd}
      </p>

      <div>
        <button
          style={{
            backgroundColor: "#bae1ff",
            margin: "20px",
            padding: "15px 32px",
            fontSize: "15px",
            borderRadius: "20px",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            go back
          </Link>
        </button>

        <button
          style={{
            backgroundColor: "#baffc9",
            margin: "20px",
            padding: "15px 32px",
            fontSize: "15px",
            borderRadius: "20px",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Random">
            go Random
          </Link>
        </button>
      </div>
    </>
  );
}
