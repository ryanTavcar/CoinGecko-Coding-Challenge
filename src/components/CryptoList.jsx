import React, { useState, useEffect, useMemo } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useMarket } from "../state/zustand";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import Preloader from "./Preloader";
import Pagination from "./Pagination";
import Filter from "./Filter";
import { useMediaQuery } from "@material-ui/core";
import { handleLargeNumbers } from "../util/helper/helperFuctions";
import TableCryptoList from "./TableCryptoList";
import MosaicCryptoList from "./MosaicCryptoList";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    overflow: "hidden",
    // border: '1px solid blue',
  },
  headingContainer: {
    marginBottom: 20,
  },
  heading: {
    fontFamily: "Bungee",
  },
  filterContainer: {
    marginBottom: 20,
  },
}));

const CryptoList = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { coins, getCoins, loading, error } = useMarket();

  const [currency, setCurrency] = useState("AUD");
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    getCoins(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
  }, [currency]);

  return (
    <>
      <Grid container direction="column" className={classes.container}>
        <Grid item xs={12} className={classes.headingContainer}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.heading}
          >
            Browse Cyrptocurrencies
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          className={classes.filterContainer}
        >
          <Filter
            currency={currency}
            setCurrency={setCurrency}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </Grid>
        {loading ? (
          <Preloader />
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <>
            {isMobile ? (
              <MosaicCryptoList data={coins} />
            ) : (
              <TableCryptoList data={coins} pageSize={pageSize} />
            )}
          </>
        )}
      </Grid>
    </>
  );
};

export default CryptoList;
