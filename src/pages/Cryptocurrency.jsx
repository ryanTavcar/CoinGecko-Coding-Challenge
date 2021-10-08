// REACT
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
// ZUSTAND
import { useCoinInfo } from "../state/zustand";

// COMPONENTS
import Preloader from "../components/Preloader";
import Alert from "../components/Alert";
// MATERIAL-UI

const Cryptocurrency = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { coin, getCoin, loading, error } = useCoinInfo();

  useEffect(() => {
    if (!coin || id !== coin.id) {
      getCoin(`https://api.coingecko.com/api/v3/coins/${id}`);
    }
  }, [coin, id, pathname]);

  return (
    <>
      {loading ? (
                <Preloader />
      )         : error ? (
         <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          {coin && (
            <>
              <h4>{coin.id}</h4>
              <div>{coin.description.en}</div>
              <h4>{coin.symbol}</h4>
              <img src={coin.image.small} alt="coin" />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Cryptocurrency;
