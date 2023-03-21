import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { withStyles } from "@mui/styles";

import { hanlderRequest } from "~/utils/utilities";
import { getAllBills, getDetailBill } from "~/services/apiServices";
import { useEffect, useState } from "react";
import { formatPrice } from "~/utils/utilities";
import { setTime } from "~/utils/utilities";
import ItemDetail from "./ItemDetail";

const styles = {
  card: {
    width: 820,
    "&:hover": {
      boxShadow: "md",
      borderColor: "neutral.outlinedHoverBorder",
    },
    marginTop: "30px",
    alignItems: "center",
  },
  desc: {
    marginLeft: "auto",
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
  }
};

function Order(props) {
  const { classes } = props;
  const [listBills, setListBills] = useState([]);
  const [billId, setbillId] = useState('');
  const [detailDrink, setDetailDrink] = useState([]);

  useEffect(() => {
    const fetchAllBills = async () => {
      const [error, res] = await hanlderRequest(getAllBills());
      if (res) {
        setListBills(res);
      } else {
        console.log(`%c ${error.message}`, "color: red");
      }
    };
    fetchAllBills();
  }, []);

  useEffect(() => {
    const fetchSpecificBill = async () => {
      const [error, res] = await hanlderRequest(getDetailBill(billId))
      if(res) {
        console.log('specific id: ',res);
        setDetailDrink(res);
      }else {
        console.log(`%c ${error.message}`, "color: red");
      }
    }
    fetchSpecificBill();
  }, [billId])

  return (
    <div className={classes.container}>
      <div>
        {listBills &&
          listBills.length > 0 &&
          listBills.map((bill) => {
            return (
              <Card
                variant="outlined"
                orientation="horizontal"
                className={classes.card}
                key={bill._id}
                sx={{border: "1px solid orange"}}
                onClick={() => setbillId(bill._id)}
              >
                <div>
                  <Typography
                    level="h2"
                    fontSize="lg"
                    id="card-description"
                    mb={0.5}
                  >
                    Orders: #{bill._id}
                  </Typography>
                  <Typography
                    fontSize="sm"
                    aria-describedby="card-description"
                    mb={1}
                  >
                    <Link
                      overlay
                      underline="none"
                      href="#interactive-card"
                      sx={{ color: "text.tertiary" }}
                    >
                      Table: T1
                    </Link>
                  </Typography>
                  <Chip
                    variant="outlined"
                    color="primary"
                    size="sm"
                    sx={{ pointerEvents: "none" }}
                  >
                    Quantity: {bill?.drink_list.length}  
                  </Chip>
                </div>
                <div className={classes.desc}>
                  <div>{setTime(bill.date)}</div>
                  <div>
                    <Typography level="h4">{formatPrice(bill.total_price)} VND</Typography>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
      <div>
        {
          listBills && (
            <ItemDetail detailDrink={detailDrink} billId={billId}/>
          )
        }
      </div>
    </div>
  );
}

export default withStyles(styles)(Order);
