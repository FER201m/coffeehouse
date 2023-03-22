
import { withStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

import OrderDone from "~/components/OrderCompleted/OrderDone";

const styles = {
  wrapper: {
    margin: "20px 20px",
    height: '100vh'
  }
};

function OrderCompleted(props) {
  const { classes } = props;

  return (
    <div className={classes.wrapper}>
      <Grid columns={{md: 12 }} container spacing={2} sx={{ flexGrow: 1 }}>
        {/* {Array.from(Array(3)).map((_, index) => (
          <Grid xs={2} sm={4} md={9} key={index}> */}
            <OrderDone />
          {/* </Grid>
        ))} */}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(OrderCompleted);
