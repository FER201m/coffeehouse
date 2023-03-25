import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import { withStyles } from "@mui/styles";
import BlenderIcon from "@mui/icons-material/Blender";

import styles from "./NavbarStyle";
import { useAuthContext } from "~/context/authContext";


function Navbar(props) {
  const { classes } = props;
  const { currentUser } = useAuthContext();

  return (
    <>
      <CoffeeMakerIcon
        sx={{
          fontSize: 50,
          color: "#af804e",
          width: "100%",
          marginTop: "24px",
        }}
      />
      <List>
        {currentUser.role.title === "cashier" && (
          <ListItem className={classes.listItem}>
            <NavLink to="/" className={classes.link}>
              <ViewListRoundedIcon />
              <ListItemText className={classes.text} primary="Table" />
            </NavLink>
          </ListItem>
        )}
        {currentUser.role.title === "cashier" && (
          <ListItem className={classes.listItem}>
            <NavLink to="order" className={classes.link}>
              <ShoppingCartRoundedIcon />
              <ListItemText className={classes.text} primary="Order" />
            </NavLink>
          </ListItem>
        )}
        {currentUser.role.title !== "cashier" && (
          <ListItem className={classes.listItem}>
            <NavLink to="bartender" className={classes.link}>
              <BlenderIcon />
              <ListItemText className={classes.text} primary="Kitchen" />
            </NavLink>
          </ListItem>
        )}
      </List>
    </>
  );
}

export default withStyles(styles)(Navbar);
