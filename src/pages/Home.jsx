import React from 'react'
import CoinCard from "../components/CoinCard";


export default function Home( {coins, loading, error}) {
  return (
    <>

    <CoinCard coins={coins} />
  
        
        
    </>
  )
}
