// library folder
import React from "react";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

// project folder
import Navbar from "~/components/NavBar/Navbar";
import Header from "~/components/Header/Header";
import styles from "./RootLayoutStyles";

function RootLayout(props) {
  const { classes } = props;

  return (
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
          <Header/>
        </header>
        <nav className={classes.navigation}>
          <Navbar />
        </nav>
        <main className={classes.productList}>
          <Outlet />
        </main>
        <Box className={classes.order}>Order</Box>
      </Box>
    </Box>
  );
}

RootLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RootLayout);
