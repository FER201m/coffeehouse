import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { withStyles } from "@mui/styles";

import styles from "./CardStyles";

function CardCofee(props) {
  const { classes, drink } = props;
  return (
    <Card className={classes.card}>
      <img
        src={drink.image}
        loading="lazy"
        alt="prodcut image"
        className={classes.imgProduct}
      />
      <Box sx={{ height: "140px" }}></Box>
      <Box className={classes.sellOff}>
        <Typography variant="h6" sx={{ color: "#ffff", fontWeight: "bold", marginLeft: '3px' }}>
          20%
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#ffff", fontWeight: "medium" }}
        >
          off
        </Typography>
      </Box>
      <Box className={classes.desc}>
        <Typography variant="h6" fontWeight="lg" gutterBottom>
          {drink.name}
        </Typography>
        <Typography fontSize="lg" gutterBottom>
          {drink.price}
        </Typography>
      </Box>
      <Button
        variant="solid"
        size="sm"
        color="primary"
        aria-label="Explore Bahamas Islands"
        sx={{
          ml: "auto",
          fontWeight: 600,
          width: "100%",
          bgcolor: "#347f61",
          "&:hover": { background: "#036b4a" },
        }}
        className={classes.orderBtn}
      >
        Order now
      </Button>
    </Card>
  );
}

export default withStyles(styles)(CardCofee);
