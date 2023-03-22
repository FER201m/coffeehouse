import { Card, CardContent, Typography, CardHeader } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import { format } from "date-fns";
import { fontSize } from "@mui/system";
import { LocalDrink, Receipt } from "@mui/icons-material";
import useFormatMoney from '~/hooks/useFormatMoney'

export default function CalendarRevenue() {
  const [dateSummary, setDateSummary] = useState({});
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/statistics/summary?date=" + date
        );
        setDateSummary(res.data);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    date && fetchData();
  }, [date]);

  return (
    <Grid container spacing={2} maxWidth={700} style={{ margin: "10px auto" }}>
      <Grid xs={6} lg={7}>
        <Calendar onChange={setDate} value={date} />
      </Grid>
      <Grid xs={6} lg={5}>
        <Card sx={{ minWidth: 275, width: "100%", height: "100%" }}>
          <CardHeader
            titleTypographyProps={{ fontSize: "20px" }}
            title={`Tổng kết ngày ${format(new Date(date), "dd/MM/yyyy")}`}
          />
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom >
              Doanh thu: {useFormatMoney(dateSummary?.revenue)}
            </Typography>
            <Typography variant="body1" sx={{display:"flex", alignItems:"center", mb:1}}>
            <Receipt/> Số hoá đơn: {dateSummary?.bill_quantity}
            </Typography>
            <Typography variant="body1" sx={{display:"flex", alignItems:"center"}}>
             <LocalDrink/> Số ly nước: {dateSummary?.cup_quantity}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} lg={12}>
        <Typography variant="h6" textAlign="center">Tổng kết theo ngày</Typography>
      </Grid>
    </Grid>
  );
}
