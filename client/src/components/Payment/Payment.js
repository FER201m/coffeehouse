import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import _ from 'lodash'
import { addNewBill } from "~/services/apiServices";
import { hanlderRequest } from "~/utils/utilities";

import styles from "../CurrentOrder/CurrentOrder_Styles";
import { useEffect, useState } from "react";
import { formatPrice } from "~/utils/utilities";

function Payment(props) {
  const { classes, listOrder, setListOrder,cardId, isTakeAway } = props;
  const [subTotal, setSubTotal] = useState(0);
  const [bill, setBill] = useState({});

  useEffect(() => {
    const result = listOrder.reduce((acc, curValue) => {
      const price = curValue.quantity * curValue.price;
      return (acc = acc + price);
    }, 0);
    setSubTotal(result);
  }, [listOrder]);

  useEffect(() => {
    const propsToDelete = ["image", "price", "name"];
    const cloneListOrder = _.cloneDeep(listOrder);
    const data = {
      isTakeAway: isTakeAway,
      cashier_id: "64109c6e2c229db3d40db2c2",
      card_id: cardId,
      drink_list: cloneListOrder.map((order) => {
        if (order._id) {
          // remomve field not need send to server
          for (let i = 0; i < propsToDelete.length; i++) {
            delete order[propsToDelete[i]];
          }
          // change _id to drink_id filed 
          const temp = order._id;
          delete order._id;
          order.drink_id = temp;
        }
        return order;
      }),
    };
    setBill(data);
  }, [listOrder, isTakeAway]);

  const hanldeAddNewBill = async() => {
    const [error, res] = await hanlderRequest(addNewBill(bill))
    if(res) {
      console.log(res);
      setListOrder([])
    }else {
      console.log(`%c ${error.message}`, "color: red");
    }
  };

  return (
    <>
      <Box>
        <div className={classes.priceInfo}>
          <div className={classes.subTotal}>
            <Typography variant="h6" color={"text.tertiary"}>
              subTotal
            </Typography>
            <Typography variant="h5" color={"text.tertiary"}>
              {formatPrice(subTotal)} vnd
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
        onClick={hanldeAddNewBill}
      >
        Print Bills
      </Button>
    </>
  );
}

export default withStyles(styles)(Payment);
