import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";

import styles from "../CurrentOrder/CurrentOrder_Styles";
import { useEffect, useState } from "react";
import { formatPrice } from "~/utils/utilities";

function Payment(props) {
  const { classes, listOrder } = props;
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const result = listOrder.reduce((acc, curValue) => {
      const price = curValue.quantity * curValue.price;
      return (acc = acc + price);
    }, 0);
    setSubTotal(result);
  }, [listOrder]);

  return (
    <>
      <Box>
        <div className={classes.priceInfo}>
          <div className={classes.subTotal}>
            <Typography variant="h6" color={"text.tertiary"}>
              subTotal 
            </Typography>
            <Typography variant="h5" color={"text.tertiary"}>
              {formatPrice(subTotal)}
            </Typography>
          </div>
          <div className={classes.subTotal}>
            <Typography variant="h6" color={"text.tertiary"}>
              Discount sales
            </Typography>
            <Typography variant="h5" color={"text.tertiary"}>
              0 vnd
            </Typography>
          </div>
          <div className={classes.subTotal}>
            <Typography variant="h6" color={"text.tertiary"}>
              Total sales tax
            </Typography>
            <Typography variant="h5" color={"text.tertiary"}>
              0 vnd
            </Typography>
          </div>
        </div>
      </Box>
      <div className={classes.sparateLineDash}></div>
      <div className={classes.subTotal}>
        <Typography
          variant="h2"
          sx={{ fontSize: "30px" }}
          color={"text.tertiary"}
        >
          Total
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: "30px" }}
          color={"text.tertiary"}
        >
          {formatPrice(subTotal)}
        </Typography>
      </div>
      <Button
        className={classes.printBillBtn}
        variant="contained"
        sx={{
          textTransform: "none",
          marginTop: "30px",
          borderRadius: "8px",
          fontSize: "20px",
          background: "#d29232",
          "&:hover": { background: "#d29232" },
        }}
      >
        Print Bills
      </Button>
    </>
  );
}

export default withStyles(styles)(Payment);
