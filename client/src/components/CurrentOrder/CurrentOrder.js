import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useContext } from "react";
import { OrderContext } from "~/Layouts/RootLayout/RootLayout";

import styles from "./CurrentOrder_Styles";
import Payment from "../Payment/Payment";
import { formatPrice } from "~/utils/utilities";

function CurrentOrder(props) {
  const { classes } = props;
  const [quantity, setQuantity] = useState(1);
  const {listOrder, setListOrder} = useContext(OrderContext); 

  const handleDeleteOrder = (id) => {
    const newList =  listOrder.filter((order) => order._id !== id);
    setListOrder(newList);
  }

  return (
    <>
      <Typography level="h4" sx={{ my: 2, color: "#ece4d8" }}>
        Current Order
      </Typography>
      {listOrder.map((orderItem) => {
        return (
          <Card sx={styles.card} key={orderItem._id} className='my-3'>
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
                <RemoveCircleOutlineIcon onClick={() => setQuantity(quantity - 1)}/>
                <label htmlFor="quantity" className={classes.pseudo}>
                  <span className={classes.qty}>{quantity}</span>
                </label>
                <AddCircleOutlineIcon onClick={() => setQuantity(quantity + 1)}/>
              </Box>
              <Chip variant="h6" color="primary" size="sm" sx={styles.price}>
                {formatPrice(orderItem.price)}
              </Chip>
            </Box>
            <Box className={classes.additionInfo}>
              <input
                type="text"
                value="ít đường, thêm topping thạch"
                className={classes.requirement}
                onChange={() => {}}
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
      <Payment />
    </>
  );
}

export default withStyles(styles)(CurrentOrder);
