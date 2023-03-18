import { Outlet, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

import { withStyles } from "@mui/styles";

const styles = {
  link: {
    textDecoration: "none",
  },
};

function OrderLayout(props) {
  const { classes } = props;

  return (
    <div>
      <header>
        <NavLink to="order-on-process" className={classes.link}>
          <Button
            sx={{
              borderRadius: "999px",
              backgroundColor: "#fdf0e2",
              color: "#e4a357",
              fontWeight: "bold",
              padding: "6px 17px",
            }}
          >
            On - process
          </Button>
        </NavLink>
        <NavLink to="order-completed" className={classes.link}>
          <Button
            sx={{
              borderRadius: "999px",
              backgroundColor: "#ebebeb",
              color: "#8e8e8e",
              fontWeight: "bold",
              padding: "6px 17px",
              marginLeft: '10px'
            }}
          >
            Completed
          </Button>
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default withStyles(styles)(OrderLayout);
