import { Calendar } from "react-calendar";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  plugins,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Stack, Typography } from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend, Title, plugins);

export default function DrinkSaleChart() {
  const [drinkCups, setDrinkCups] = useState([]);
  const [labels, setLabels] = useState([]);
  const [takeAwayPercent, setTakeAwayPercent] = useState([]);
  const [tlabels, setTLabels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topSaleRes = await axios.get(
          "http://localhost:8800/api/statistics/top-drink"
        );
        const topDrinks = {
          data: [],
          labels: [],
        };
        //    console.log(topSaleRes.data);
        for (const drink of topSaleRes.data) {
          topDrinks.data.push(drink.total_price);
          topDrinks.labels.push(drink._id);
        }
        setDrinkCups(topDrinks.data);
        setLabels(topDrinks.labels);

        const takeAwayPerRes = await axios.get(
          "http://localhost:8800/api/statistics/place-type"
        );
        setTakeAwayPercent([takeAwayPerRes.data.here, takeAwayPerRes.data.togo]);
        setTLabels(["Uống tại quán", "Mang đi"]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const dataCreator = (data, labels, hoverLabel) => ({
    // labels: labels,
    labels: labels,
    datasets: [
      {
        label: hoverLabel,
        // data: drinkCups,
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
      },
    ],
  });

  const option = {
    responsive: true,
    // type:"line",
    maintainAspectRatio: false,
    plugins: {},
  };

  return (
    <Stack
      container
      spacing={2}
      mb={4}
      width={700}
      style={{
        margin: "10px auto",
      }}
    >
      <Box maxHeight={400} minHeight={300} mb={4} width="100%">
        {drinkCups.length && labels.length && (
          <Doughnut
            data={dataCreator(drinkCups, labels, "Tổng số")}
            options={{
              ...option,
              plugins: {
                legend: {
                  position: "left",
                  display: true,
                },
                title: {
                  display: true,
                  text: "Top drink sales",
                  position: "bottom",
                  font: {
                    size: 22,
                    weight: "bold",
                  },
                  color: "#333",
                },
              },
            }}
          />
        )}
      </Box>
      <Box maxHeight={400} minHeight={300}>
        <Doughnut
          data={dataCreator(takeAwayPercent, tlabels, "Số lượng")}
          options={{
            ...option,
            plugins: {
              legend: {
                position: "right",
                display: true,
              },
              title: {
                display: true,
                text: "Take away percentage",
                position: "bottom",
                font: {
                  size: 22,
                  weight: "bold",
                },
                color: "#333",
              },
            },
          }}
        />
      </Box>
    </Stack>
  );
}
