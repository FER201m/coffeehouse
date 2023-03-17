import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import { withStyles } from "@mui/styles";

const styles = {
  link: {
    textDecoration: "none",
    paddingTop: 20,
    color: "#818181",
    textAlign: "center",
    margin: "0 auto",
    "&:hover": { color: "#ec7a0a" },
  },
  listItem: {
    marginTop: "30px",
    cursor: "pointer",
    borderRadius: "20px",
    width: "77px!important",
    height: "84px",
    margin: "auto auto",
    color: "#ec7a0a",
    "&:hover": { background: "#fdf0e2", color: "#ec7a0a" },
  }
};

function Navbar(props) {
  const {classes} = props;

  return (
    <>
      <CoffeeMakerIcon sx={{ fontSize: 50, color: "#61411a", width: "100%", marginTop: '24px' }} />
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
