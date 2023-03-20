import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useContext } from "react";
import { OrderContext } from "~/Layouts/RootLayout/RootLayout";

import styles from "./CurrentOrder_Styles";
import Payment from "../Payment/Payment";
import { formatPrice } from "~/utils/utilities";

function CurrentOrder(props) {
  const { classes } = props;
  const { listOrder, setListOrder } = useContext(OrderContext);

  const handleDeleteOrder = (id) => {
    const newList = listOrder.filter((order) => order._id !== id);
    setListOrder(newList);
  };

  const hanldeOnChangeValue = (id, e, type) => {
    const cloneListCurrentOrder = [...listOrder];
    if (cloneListCurrentOrder.length > 0) {
      const item = cloneListCurrentOrder.find((item) => item._id === id);
      console.log({type});
      switch (type) {
        case "note":
          if (item) {
            item.note = e.target.value;
          }
          break;
        case "minus":
          console.log("check type:", item.quantity - 1);
          if (item) {
            item.quantity = item.quantity - 1;
          }
          break;
        case "plus":
          console.log("check type:", item.quantity + 1);
          if (item) {
            item.quantity = item.quantity + 1;
          }
          break;
        default:
          throw new Error("no case valid");
      }
    }
    setListOrder(cloneListCurrentOrder);
  };

  console.log(">> current Order: ", listOrder);
  return (
    <>
      <Typography level="h4" sx={{ my: 2, color: "#ece4d8" }}>
        Current Order
      </Typography>
      {listOrder.map((orderItem) => {
        return (
          <Card sx={styles.card} key={orderItem._id} className="my-3">
            <Box sx={styles.wrapper}>
              <img
                src={orderItem.image}
                loading="lazy"
                alt=""
                className={classes.img}
              />
              <Box className={classes.desc}>
                <Box>
                  <Typography level="h2" fontSize="md" id="card-description">
                    {orderItem.name}
                  </Typography>
                </Box>
                <RemoveCircleOutlineIcon
                  onClick={(event) => hanldeOnChangeValue(orderItem._id, event, "minus")}
                  sx={{ fontSize: "22px", cursor: "pointer" }}
                />
                <label htmlFor="quantity" className={classes.pseudo}>
                  <span className={classes.qty}>{orderItem.quantity}</span>
                </label>
                <AddCircleOutlineIcon
                  onClick={(event) => hanldeOnChangeValue(orderItem._id, event, "plus")}
                  sx={{ fontSize: "22px", cursor: "pointer" }}
                />
              </Box>
              <Chip variant="h6" color="primary" size="sm" sx={styles.price}>
                {formatPrice(orderItem.price * orderItem.quantity)}
              </Chip>
            </Box>
            <Box className={classes.additionInfo}>
              <input
                type="text"
                value={orderItem.note}
                className={classes.requirement}
                onChange={(event) => hanldeOnChangeValue(orderItem._id, event, "note")}
              />
              <div
                className={classes.wrapperTrash}
                onClick={() => handleDeleteOrder(orderItem._id)}
              >
                <DeleteIcon className={classes.trashIcon} />
              </div>
            </Box>
          </Card>
        );
      })}
      <Payment listOrder={listOrder}/>
    </>
  );
}

export default withStyles(styles)(CurrentOrder);
