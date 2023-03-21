// library folder
import React from "react";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Outlet, useLocation } from "react-router-dom";
import { useState, createContext } from "react";

// project folder
import Navbar from "~/components/NavBar/Navbar";
import Header from "~/components/Header/Header";
import styles from "./RootLayoutStyles";
import CurrentOrder from "~/components/CurrentOrder/CurrentOrder";

export const OrderContext = createContext();

function RootLayout(props) {
  const { classes } = props;
  const [listOrder, setListOrder] = useState([]);
  const history = useLocation();

  return (
    <OrderContext.Provider value={{ listOrder, setListOrder }}>
      <Box
        sx={{
          color: "#fff",
          "& > .MuiBox-root > .MuiBox-root": {
            fontSize: "0.875rem",
            fontWeight: "700",
          },
        }}
      >
        <Box className={classes.containerGrid}>
          <header className={classes.header}>
            <Header />
          </header>
          <nav className={classes.navigation}>
            <Navbar />
          </nav>
          <main
            className={
              history.pathname.includes("order")
                ? classes.defaultMainContent
                : classes.productList
            }
          >
            <Outlet />
          </main>
          <Box className={classes.order}>
            <CurrentOrder />
          </Box>
        </Box>
      </Box>
    </OrderContext.Provider>
  );
}

RootLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RootLayout);
