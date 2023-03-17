import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";

function Navbar() {
  return (
    <List sx={{ width: "100%" }} aria-label="contacts">
      <ListItem disablePadding>
        <ListItemIcon>
          <CoffeeMakerIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <NavLink to="/">
            <ListItemText primary="Home" />
          </NavLink>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <NavLink to="drinks">
            <ListItemText primary="Drinks" />
          </NavLink>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default Navbar;
