import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useContext, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { toast } from 'react-toastify';

import { OrderContext } from "~/Layouts/RootLayout/RootLayout";
import styles from "./CurrentOrder_Styles";
import Payment from "../Payment/Payment";
import { formatPrice } from "~/utils/utilities";
import { hanlderRequest } from "~/utils/utilities";
import { getFreeCard } from "~/services/apiServices";

function CurrentOrder(props) {
  const { classes } = props;
  const { listOrder, setListOrder } = useContext(OrderContext);
  const [freeCard, setFreeCard] = useState([]);
  const [cardNumber, setCardNumber] = useState("");
  const [isTakeAway, setIsTakeAway] = useState(false);

  const handleChange = (event) => {
    setCardNumber(event.target.value);
  };

  useEffect(() => {
    const fetchAllfreeCard = async () => {
      const [error, res] = await hanlderRequest(getFreeCard());
      if (res) {
        setFreeCard(res);
      } else {
        console.log(`%c ${error}`, "color: red");
      }
    };
    fetchAllfreeCard();
  }, []);

  const handleDeleteOrder = (id) => {
    const newList = listOrder.filter((order) => order._id !== id);
    setListOrder(newList);
  };

  const hanldeOnChangeValue = (id, e, type) => {
    const cloneListCurrentOrder = [...listOrder];
    if (cloneListCurrentOrder.length > 0) {
      const item = cloneListCurrentOrder.find((item) => item._id === id);
      switch (type) {
        case "note":
          if (item) {
            item.note = e.target.value;
          }
          break;
        case "minus":
          if (item) {
            item.quantity = item.quantity - 1;
            if(item.quantity < 1) {
              toast.error('minimum is 1');
              return;
            }
          }
          break;
        case "plus":
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
                  onClick={(event) =>
                    hanldeOnChangeValue(orderItem._id, event, "minus")
                  }
                  sx={{ fontSize: "22px", cursor: "pointer" }}
                />
                <label htmlFor="quantity" className={classes.pseudo}>
                  <span className={classes.qty}>{orderItem.quantity}</span>
                </label>
                <AddCircleOutlineIcon
                  onClick={(event) =>
                    hanldeOnChangeValue(orderItem._id, event, "plus")
                  }
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
                placeholder="note"
                className={classes.requirement}
                onChange={(event) =>
                  hanldeOnChangeValue(orderItem._id, event, "note")
                }
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
      <Box sx={{ my: 3, mx: "auto" }}>
        <FormControl sx={{ minWidth: 78, borderRadius: '8px' }} size="small">
          <InputLabel htmlFor="grouped-native-select">Card</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="grouped-native-select"
            value={cardNumber}
            onChange={handleChange}
            displayEmpty
            label="Card"
          >
            {freeCard?.map((card) => {
              return (
                <MenuItem key={card._id} value={card._id}>
                  {card.number}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={isTakeAway}
              onClick={(e) => setIsTakeAway(e.target.checked)}
              sx={{
                color: "#ffffff",
                "&.Mui-checked": {
                  color: "#ffffff",
                },
                ml: 3
              }}
            />
          }
          label="Is Take Away"
        />
      </Box>
      <Payment
        listOrder={listOrder}
        cardId={cardNumber}
        isTakeAway={isTakeAway}
        setListOrder={setListOrder}
      />
    </>
  );
}

export default withStyles(styles)(CurrentOrder);
