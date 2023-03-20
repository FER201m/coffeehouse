import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { withStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { OrderContext } from "~/Layouts/RootLayout/RootLayout";

import { formatPrice } from "~/utils/utilities";
import styles from "./CardStyles";
import { addOrder } from "~/redux/action/actions";

function CardCofee(props) {
  const { classes, drink } = props;
  const { listOrder, setListOrder } = useContext(OrderContext);

  const handleAddOrder = () => {
    let isDupicated = false;
    listOrder.forEach((element) => {
      if (element._id === drink._id) {
        console.log("%c duplicated product", "color: red");
        isDupicated = true;
      }
    });
    if(!isDupicated) {
      setListOrder((prev) => {
        return [...prev, drink];
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
      <Box className={classes.sellOff}>
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
      </Box>
      <Box className={classes.desc}>
        <Typography variant="h6" fontWeight="lg" gutterBottom>
          {drink.name}
        </Typography>
        <Typography fontSize="lg" gutterBottom>
          {formatPrice(drink.price)}
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
