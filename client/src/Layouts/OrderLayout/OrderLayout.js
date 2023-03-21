import { Outlet, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

import { withStyles } from "@mui/styles";

const styles = {
  link: {
    textDecoration: "none",
  },
  OrderLayout: {
    backgroundColor: '#fafafa',
    gridArea: "mainContent",
    padding: '10px 30px'
  },
  btn: {
    borderRadius: "999px",
    backgroundColor: "#ebebeb",
    color: "#8e8e8e",
    fontWeight: "bold",
    padding: "6px 17px",
    marginLeft: '10px'
  }
};

function OrderLayout(props) {
  const { classes } = props;

  return (
    <div className={classes.OrderLayout}>
      <header>
        <NavLink to="" className={classes.link}>
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
            sx={styles.btn}      
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
