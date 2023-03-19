import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";

import styles from "./CurrentOrder_Styles";
import Payment from "../Payment/Payment";
import { formatPrice } from "~/utils/utilities";
import { removeOrder } from "~/redux/action/actions";

function CurrentOrder(props) {
  const { classes } = props;

  const dispatch = useDispatch();
  const currentOrerList = useSelector((state) => state.order.currentOrders);

  const handleDeleteOrder = (id) => {
    dispatch(removeOrder(id));
  }

  return (
    <>
      <Typography level="h4" sx={{ my: 2, color: "#ece4d8" }}>
        Current Order
      </Typography>
      {currentOrerList.map((orderItem) => {
        return (
          <Card sx={styles.card} key={orderItem._id} className='my-3'>
            <Box sx={styles.wrapper}>
              <img
                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                loading="lazy"
                alt=""
                className={classes.img}
              />
              <Box className={classes.desc}>
                <Box>
                  <Typography level="h2" fontSize="md" id="card-description">
                    {orderItem.name}
                  </Typography>
                  <Typography
                    fontSize="sm"
                    aria-describedby="card-description"
                    mb={1}
                  >
                    <Link underline="none" sx={{ color: "text.tertiary" }}>
                      x2
                    </Link>
                  </Typography>
                </Box>
                <label htmlFor="quantity" className={classes.pseudo}>
                  <input
                    id="quantity"
                    value={10}
                    type="text"
                    className={classes.qty}
                    onChange={() => {}}
                  />
                </label>
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
