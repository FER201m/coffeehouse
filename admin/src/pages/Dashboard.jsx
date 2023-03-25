import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  CardHeader,
} from "@mui/material";
import { Group, LocalDrink, Style } from "@mui/icons-material";
import axios from "axios";
import DrinkSaleChart from "~/components/drinkSaleChart/DrinkSaleChart";
import CalendarRevenue from "~/components/CalendarRevenue/CalendarRevenue";

export const Dashboard = () => {
  const [statistics, setStatistics] = useState({
    staff: 0,
    drinks: 0,
    cards: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/statistics");
        console.log(res);
        setStatistics(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStatistics();
  }, []);

  return (
    <Stack spacing={2}>
      <Grid container spacing={4} mx={4}>
        <Grid xs={6} lg={4}>
          <Card
            sx={{
              minWidth: 275,
              color: "#fff",
              backgroundImage:
                "linear-gradient(120deg, #c7f855 0%, #85e191 100%)",
            }}
          >
            <CardHeader
              avatar={<Group fontSize="large" />}
              title={
                <Typography fontWeight={500} fontSize={20} variant="subtitle1">
                  Nhân viên
                </Typography>
              }
            />
            <Typography
              variant="h4"
              fontWeight={700}
              align="right"
              mx={3}
              mb={1}
            >
              {statistics.staff}
            </Typography>
          </Card>
        </Grid>
        <Grid xs={6} lg={4}>
          <Card
            sx={{
              minWidth: 275,
              color: "#fff",
              backgroundImage:
                "linear-gradient( 109.6deg, rgba(112, 251, 244, 1) 11.2%, rgba(110,123,251,1) 91.1% )",
            }}
          >
            <CardHeader
              avatar={<LocalDrink fontSize="large" />}
              title={
                <Typography fontWeight={500} fontSize={20} variant="subtitle1">
                  Món nước
                </Typography>
              }
            />
            <Typography
              variant="h4"
              fontWeight={700}
              align="right"
              mx={3}
              mb={1}
            >
              {statistics.drinks}
            </Typography>
          </Card>
        </Grid>
        <Grid xs={6} lg={4}>
          <Card
            sx={{
              minWidth: 275,
              color: "#fff",
              backgroundImage: "linear-gradient(25deg,#d64c7f,#d25068 50%)",
            }}
          >
            <CardHeader
              avatar={<Style fontSize="large" />}
              title={
                <Typography fontWeight={500} fontSize={20} variant="subtitle1">
                  Thẻ
                </Typography>
              }
            />
            <Typography
              variant="h4"
              fontWeight={700}
              align="right"
              mx={3}
              mb={1}
            >
              {statistics.cards}
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* pie charts */}
      <DrinkSaleChart />

      {/* Summary by date */}
      <Box width={900} style={{ margin: "10px auto" }} sx={{p:5, boxShadow:3, borderRadius:3, backgroundColor:"#fff"}}>
        <CalendarRevenue />
      </Box>
    </Stack>
  );
};
