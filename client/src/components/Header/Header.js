// library folder
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

// project folder
import "./Header.scss";
import {
  styles,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./HeaderStyles";
import { useAuthContext } from "~/context/authContext";

const style = {
  buttonLogout: {
    marginLeft: "30px",
    textTransform: "normal",
    background: "#ab7e49",
    "&:hover": {
      background: '#d29232'
    }
  },
  iconLogout: {
    fontSize: "20px",
    marginLeft: "6px",
  },
};

function Header(props) {
  const { classes } = props;

  const { logout, currentUser } = useAuthContext();

  return (
    <div className="container">
      <div className="search-product">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <div className="cashier-on">
        <div className="cashier-on__avata">
          <img
            alt="Remy Sharp"
            src={currentUser.avatar}
            className="cashier-on__avata-img"
          />
        </div>
        <Box sx={{ marginLeft: "10px" }}>
          <Typography className={classes.name} variant="h6">
            Hello {currentUser.fullname}
          </Typography>
          <Typography className={classes.name} variant="caption">
            Cashier on Phuc Long
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          sx={style.buttonLogout}
          onClick={() => logout()}
        >
          Logout
          <LogoutIcon sx={style.iconLogout} />
        </Button>
      </div>
    </div>
  );
}

export default withStyles(styles)(Header);
