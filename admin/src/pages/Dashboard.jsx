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
import {Group, LocalDrink, Style} from "@mui/icons-material";

// ;
// background-image: linear-gradient(25deg,#d64c7f,#ee4758 50%);
export const Dashboard = () => {
    const {statistics, setStatistics} = useState({
        staff:0,
        drinks: 0,
        cards:0,
    });
    const {staff, drinks, cards} = statistics;

    useEffect(() => {
      const fetchStatistics = async () => {
         try {
             const staffRes = await 
         } catch(err) {
          console.log(err);
         }
      }
    }, [])
    

  return (
    <Stack spacing={2}>
      <Grid container spacing={4} mx={4}>
        <Grid xs={6} lg={4}>
          <Card
            sx={{
              minWidth: 275,
              color: "#fff",
              backgroundImage:
                "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
            }}
          >
            <CardHeader
              avatar={<Group fontSize="large" />}
              title={
                <Typography fontWeight={500} fontSize={20} variant="subtitle1">
                  Staff
                </Typography>
              }
            />
            <Typography variant="h4" fontWeight={700} align="right" mx={3} mb={1}>
              {staff}
            </Typography>
          </Card>
        </Grid>
        <Grid xs={6} lg={4}>
        <Card
            sx={{
              minWidth: 275,
              color: "#fff",
              backgroundImage:
                "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )",
            }}
          >
            <CardHeader
              avatar={<LocalDrink fontSize="large" />}
              title={
                <Typography fontWeight={500} fontSize={20} variant="subtitle1">
                  Drinks
                </Typography>
              }
            />
            <Typography variant="h4" fontWeight={700} align="right" mx={3} mb={1}>
              7
            </Typography>
          </Card>
        </Grid>
        <Grid xs={6} lg={4}>
        <Card
            sx={{
              minWidth: 275,
              color: "#fff",
              backgroundImage:
                'linear-gradient(25deg,#d64c7f,#d25068 50%)'
            }}
          >
            <CardHeader
              avatar={<Style fontSize="large" />}
              title={
                <Typography fontWeight={500} fontSize={20} variant="subtitle1">
                  Cards
                </Typography>
              }
            />
            <Typography variant="h4" fontWeight={700} align="right" mx={3} mb={1}>
              7
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};
