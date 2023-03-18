import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import { withStyles } from "@mui/styles";

import styles from './NavbarStyle'

function Navbar(props) {
  const {classes} = props;

  return (
    <>
      <CoffeeMakerIcon sx={{ fontSize: 50, color: "#af804e", width: "100%", marginTop: '24px' }} />
      <List>
        <ListItem className={classes.listItem}>
          <NavLink to="/" className={classes.link}>
            <HomeRoundedIcon />
            <ListItemText className={classes.text} primary="Home" />
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink to="drinks" className={classes.link}>
            <ViewListRoundedIcon />
            <ListItemText className={classes.text} primary="Table" />
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink to="drinks" className={classes.link}>
            <ShoppingCartRoundedIcon />
            <ListItemText className={classes.text} primary="Order" />
          </NavLink>
        </ListItem>
      </List>
    </>
  );
}

export default withStyles(styles)(Navbar);
