import React from "react";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Navbar from "~/components/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import styles from './RootLayoutStyles'

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
        <Box className={classes.header}>Header</Box>
        <Box className={classes.navigation}>
          <Navbar />
        </Box>
        <Box className={classes.productList}>
          <Outlet />
        </Box>
        <Box className={classes.order}>Order</Box>
      </Box>
    </Box>
  );
}

RootLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RootLayout);
