import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";

const styles = {
  drinkID: {
    fontSize: "20px",
  },
  item: {
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    marginBottom: "10px",
    background: "#fff",
    borderRadius: "14px",
  },
  itemImage: {
    width: "35px",
    height: "35px",
    objectFit: "cover",
  },
  borderImage: {
    padding: "10px",
    background: "#fff2e6",
    borderRadius: "17px",
    height: "fit-content",
    marginTop: "5px",
    alignSelf: "center",
  },
  totalPrice: {
    alignSelf: "end",
    fontWeight: 600,
    marginLeft: "10px",
  },
  desc: {
    marginLeft: "10px",
    padding: "7px 0",
    width: "280px"
  },
  drinkName: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#484444",
  },
};

function ItemDetail(props) {
  const { classes, detailDrink, billId } = props;

  return (
    <Card
      sx={{
        width: 445,
        padding: "5px 20px",
        borderRadius: "8px",
        background: "#ab7e49",
        marginTop: '30px'
      }}
    >
      <div className="header">
        <Typography variant="h5" sx={{color: '#ece4d8', fontSize: '18px'}}>
          Order ID
        </Typography>
        <Typography gutterBottom className={classes.drinkID} sx={{fontSize: "20px", fontWeight: 600}}>
          #{billId}
        </Typography>
      </div>
      <div className="body">
        {detailDrink && detailDrink.length > 0 && billId && detailDrink.map((item) => {
          return (
            <div className={classes.item} key={item._id}>
              <div className={classes.borderImage}>
                <img
                  className={classes.itemImage}
                  src={item?.drink_id?.image}
                  alt="drink image"
                />
              </div>
              <div className={classes.desc}>
                <Typography variant="h6" className={classes.drinkName}>
                  {item?.drink_id?.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ width: "100%" }}
                >
                  <span sx={{opaciry: 0.6}}>note:</span> <em sx={{marginLeft: '5px'}}>{item.note}</em>
                </Typography>
                <div className="price">quantity: {item.quantity}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  );
}

export default withStyles(styles)(ItemDetail);
