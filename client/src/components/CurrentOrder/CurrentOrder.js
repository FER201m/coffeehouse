import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import styles from "./CurrentOrder_Styles";

function CurrentOrder(props) {
  const { classes } = props;
  return (
    <>
      <Typography level="h4" sx={{ my: 2, color: '#ece4d8'}}>
        Current Order
      </Typography>
      <Card sx={styles.card}>
        <Box sx={styles.wrapper}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            loading="lazy"
            alt=""
            className={classes.img}
          />
          <Box className={classes.desc}>
            <Box>
              <Typography level="h2" fontSize="md" id="card-description">
                Capuchino
              </Typography>
              <Typography
                fontSize="sm"
                aria-describedby="card-description"
                mb={1}
              >
                <Link underline="none" sx={{ color: "text.tertiary" }}>
                  $2.29
                </Link>
              </Typography>
            </Box>
            <label for="quantity" className={classes.pseudo}>
              <input
                id="quantity"
                value={10}
                type="text"
                className={classes.qty}
              />
            </label>
          </Box>
          <Chip variant="h6" color="primary" size="sm" sx={styles.price}>
            $11.96
          </Chip>
        </Box>
        <Box className={classes.additionInfo}>
          <input
            type="text"
            value="ít đường, thêm topping thạch"
            className={classes.requirement}
          />
          <div className={classes.wrapperTrash}>
            <DeleteIcon className={classes.trashIcon} />
          </div>
        </Box>
      </Card>
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
          background: '#d29232',
          "&:hover": { background: "#d29232" }
        }}
      >
        Print Bills
      </Button>
    </>
  );
}

export default withStyles(styles)(CurrentOrder);
