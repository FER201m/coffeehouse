import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "500px",
  color: "#141414",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    // width: "auto",
    borderRadius: "13px",
  },
//   boxShadow:
//     "var(--joy-shadowRing, 0 0 #000),0.3px 0.8px 1.1px rgba(var(--joy-shadowChannel, 187 187 187) / 0.12),1.1px 2.8px 3.9px -0.4px rgba(var(--joy-shadowChannel, 187 187 187) / 0.17),2.4px 6.1px 8.6px -0.8px rgba(var(--joy-shadowChannel, 187 187 187) / 0.23),5.3px 13.3px 18.8px -1.2px rgba(var(--joy-shadowChannel, 187 187 187) / 0.29)",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const styles = {
  avata: {
    position: "absolute",
  },
  searchBtn: {
    background: "#3e2013",
  },
  name: {
    color: "#141414",
  },
};

export { Search, SearchIconWrapper, styles, StyledInputBase };
