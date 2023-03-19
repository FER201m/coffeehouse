import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";


import styles from "../CurrentOrder/CurrentOrder_Styles";

function Payment(props) {
  const { classes } = props;    
  return (
    <>
      <Box>
        <div className={classes.priceInfo}>
          <div className={classes.subTotal}>
            <Typography variant="h6" color={"text.tertiary"}>
              Subtotal
            </Typography>
            <Typography variant="h5" color={"text.tertiary"}>
              100.000vnd
            </Typography>
          </div>
          <div className={classes.subTotal}>
            <Typography variant="h6" color={"text.tertiary"}>
              Discount sales
            </Typography>
            <Typography variant="h5" color={"text.tertiary"}>
              -10.000vnd
            </Typography>
          </div>
          <div className={classes.subTotal}>
            <Typography variant="h6" color={"text.tertiary"}>
              Total sales tax
            </Typography>
            <Typography variant="h5" color={"text.tertiary"}>
              2.300vnd
            </Typography>
          </div>
        </div>
      </Box>
      <div className={classes.sparateLineDash}></div>
      <div className={classes.subTotal}>
        <Typography
          variant="h2"
          sx={{ fontSize: "30px" }}
          color={"text.tertiary"}
        >
          Total
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: "30px" }}
          color={"text.tertiary"}
        >
          92.300vnd
        </Typography>
      </div>
      <Button
        className={classes.printBillBtn}
        variant="contained"
        sx={{
          textTransform: "none",
          marginTop: "30px",
          borderRadius: "8px",
          fontSize: "20px",
          background: "#d29232",
          "&:hover": { background: "#d29232" },
        }}
      >
        Print Bills
      </Button>
    </>
  );
}

export default withStyles(styles)(Payment);
