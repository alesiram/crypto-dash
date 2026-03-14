import { useState, useEffect } from "react";
import CoinCard from "./components/CoinCard";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import MoreDetails from "./pages/MoreDetails";
import Random from "./pages/Random";
import NavBar from "./components/NavBar";
import NotFoundPage from "./pages/NotFoundPage";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching api must be inside a useEffect
  // this covers err handling, bad https response, loading state
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch the data");
        const data = await res.json();

        console.log(data);
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, []);

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home coins={coins} loading={loading} error={error} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Random" element={ <Random /> } />
          <Route path="/MoreDetails/:id" element={ <MoreDetails /> } />
          <Route path="*" element={ <NotFoundPage />}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
