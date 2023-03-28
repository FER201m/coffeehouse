import {
  Box,
  Grid,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { DrinkPopup } from "~/components/DrinksPopup/DrinkPopup";
import useFormatMoney from "~/hooks/useFormatMoney";
import CoffeeIcon from "@mui/icons-material/Coffee";
import axios from "axios";
import ROUTER from "~/api/server";
import { v4 as uuidv4 } from "uuid";
import CardDrink from "../components/Drinks/CardDrink";

const style = {
  container: {
    // backgroundColor: 'red'
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    position: "relative",
  },
  image: {
    width: "60%",
    height: "auto",
    objectFit: "contain",
    marginBottom: "20px",
  },
  image_disable: {
    width: "60%",
    height: "auto",
    objectFit: "contain",
    marginBottom: "20px",
    filter: "grayscale(100%)",
  },
  name: {
    fontWeight: "bold",
  },
  price: {
    color: "#876445",
    fontWeight: "bold",
    fontSize: "20px",
  },
  price_disable: {
    color: "#dbdbdb",
    fontWeight: "bold",
    fontSize: "20px",
  },
  content: {
    backgroundColor: "#F4DFBA",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px 2px",
  },
  content_disable: {
    backgroundColor: "#888888",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px 2px",
    color: "#dbdbdb",
  },
  newContent: {
    backgroundColor: "#F4DFBA",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px 2px",
    height: "100%",
    width: "100%",
  },
  search: {
    width: "100%",
    height: "50px",
    display: "flex",
    padding: "5px",
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: "80%",
    padding: "0 15px",
    outline: "none",
    borderRadius: "15px",
    border: "none",
    fontSize: "15px",
    marginRight: "10px",
    width: "30%",
  },
  button: {
    height: "80%",
    padding: "0 15px",
    fontWeight: "bold",
    backgroundColor: "#876445",
    outline: "none",
    border: "none",
    color: "#F4DFBA",
    borderRadius: "2px",
  },
  newButton: {
    height: "10%",
    padding: "0 15px",
    fontWeight: "bold",
    backgroundColor: "#876445",
    outline: "none",
    border: "none",
    color: "#F4DFBA",
    borderRadius: "2px",
  },
  icons: {
    position: "absolute",
    right: "20px",
    top: "20px",
  },
  newDrink: {
    fontSize: "100px",
  },
  newDrinkTxt: {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export const Drinks = () => {
  const [popupDrink, setpopupDrink] = useState(null);
  const [DrinkList, setDrinkList] = useState([]);
  const [openSettingId, setOpenSettingId] = useState(false);
  const formatMoney = useFormatMoney();
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    getDrinks();
  }, []);

  const getDrinks = async () => {
    try {
      const response = await axios.get(`${ROUTER}/api/drinks`);
      setDrinkList(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onToggleDrinkDetail = (payload) => {
    console.log(payload);
    setpopupDrink(() => payload);
  };

  const addNewDrinks = (newDrinks) => {
    setDrinkList((drinks) => [...drinks, newDrinks]);
  };

  return (
    <>
      <Box sx={style.search}>
        <input
          type="text"
          placeholder="Search by name"
          style={style.input}
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <button style={style.button}>Search</button>
      </Box>
      <Grid sx={style.container} spacing={4}>
        <Grid item sx={style.card} xs={3} className="hover">
          <Box sx={style.newContent} onClick={() => onToggleDrinkDetail(0)}>
            <CoffeeIcon style={style.newDrink} />
            <Typography sx={style.newDrinkTxt}>Create new drink</Typography>
          </Box>
          {popupDrink == 0 ? (
            <DrinkPopup
              addNewDrinks={addNewDrinks}
              drink={false}
              onClose={onToggleDrinkDetail}
            />
          ) : undefined}
        </Grid>

        {DrinkList.map((drink) => (
          <CardDrink
            drink={drink}
            key={uuidv4()}
            setDrinkList={setDrinkList}
            DrinkList={DrinkList}
          />
        ))}
      </Grid>
    </>
  );
};
