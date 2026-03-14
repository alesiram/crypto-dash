import { Link } from "react-router";

const CoinCard = ({ coins }) => {
  return (
    <>
      {coins.map((c) => (
        <div
          key={c.id}
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            border: "1px solid black",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <Link to={`/MoreDetails/${c.id}`}>
            <h3>{c.id.toUpperCase()} </h3>
            <img src={c.image} width={40} />
          </Link>

          <p>
            <b>Price: </b> ${c.current_price}
          </p>
          <p
            style={{
              color: c.price_change_percentage_24h > 0 ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            <b>Price Change (24h): </b>
            {c.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      ))}
    </>
  );
};

export default CoinCard;
