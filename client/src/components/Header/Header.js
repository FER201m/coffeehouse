// library folder
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

// project folder
import "./Header.scss";
import {
  styles,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./HeaderStyles";

function Header(props) {
  const { classes } = props;
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
            src="https://mui.com/static/images/avatar/2.jpg"
            className="cashier-on__avata-img"
          />
        </div>
        <Box sx={{ marginLeft: "10px" }}>
          <Typography className={classes.name} variant="h6">
            Hello Anh Lãm
          </Typography>
          <Typography className={classes.name} variant="caption">
            Cashier on Phuc Long
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default withStyles(styles)(Header);
