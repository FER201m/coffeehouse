import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { useContext } from "react";
import { OrderContext } from "~/Layouts/RootLayout/RootLayout";
import { toast } from "react-toastify";

import { formatPrice } from "~/utils/utilities";
import styles from "./CardStyles";

function CardCofee(props) {
  const { classes, drink } = props;
  const { listOrder, setListOrder } = useContext(OrderContext);

  const handleAddOrder = () => {
    let isDupicated = false;
    listOrder.forEach((element) => {
      if (element._id === drink._id) {
        toast.error("drink added", {
          autoClose: 1000,
          icon: "🍵",
        });
        isDupicated = true;
      }
    });
    if (!isDupicated) {
      setListOrder((prev) => {
        return [...prev, { ...drink, quantity: 1, note: "" }];
      });
    }
  };

  return (
    <Card className={classes.card}>
      <img
        src={drink.image}
        loading="lazy"
        alt="prodcut image"
        className={classes.imgProduct}
      />
      <Box sx={{ height: "140px" }}></Box>
      {/* <Box className={classes.sellOff}>
        <Typography
          variant="h6"
          sx={{ color: "#ffff", fontWeight: "bold", marginLeft: "3px" }}
        >
          20%
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#ffff", fontWeight: "medium" }}
        >
          off
        </Typography>
      </Box> */}
      <Box className={classes.desc}>
        <Typography
          variant="h6"
          
        > 
          {drink.name}
        </Typography>
        <Typography
          fontSize="lg"
          gutterBottom
          sx={{ fontWeight: 500, color: "#0C713D" }}
        >
          {formatPrice(drink.price)} đ
        </Typography>
      </Box>
      <Button
        variant="solid"
        size="sm"
        sx={{
          ml: "auto",
          fontWeight: 600,
          width: "100%",
          bgcolor: "#347f61",
          "&:hover": { background: "#036b4a" },
        }}
        className={classes.orderBtn}
        onClick={handleAddOrder}
      >
        Order now
      </Button>
    </Card>
  );
}

export default withStyles(styles)(CardCofee);
