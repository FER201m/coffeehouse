import React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import moment from "moment";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ModalDetail from "./ModalDetail";

const style = {
  tableHead: {
    fontWeight: 600
  }
}

export default function Kitchen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Order, setOrder] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/api/bills")
      .then((response) => response.json())
      .then((data) => {
        setOrder(data);
      })
      .catch((error) => console.error(error));
  }, []);

  function showDetail(id) {
    fetch(`http://localhost:8800/api/bills/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setOrderDetail(data);
      })
      .catch((error) => console.error(error));
    console.log({ orderDetail });
    return handleOpen();
  }

  function totalDrink(id) {
    const bill = Order.find((bill) => bill._id === id);

    let totalDrinks = 0;
    for (const drink of bill.drink_list) {
      totalDrinks += drink.quantity;
    }

    return totalDrinks;
  }

  function setTime(dateString) {
    const formattedTime = moment(dateString).format("HH:mm");
    return <div>{formattedTime}</div>;
  }

  return (
    <div>
      <TableContainer
        sx={{
          width: "75%",
          padding: 1,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={style.tableHead}>Card</TableCell>
              <TableCell align="center" sx={style.tableHead}>Cashier</TableCell>
              <TableCell align="center" sx={style.tableHead}>Quantity</TableCell>
              <TableCell align="center" sx={style.tableHead}>Time</TableCell>
              <TableCell align="center" sx={style.tableHead}>Take away</TableCell>
              {/* <TableCell align="center">Total Order</TableCell> */}
              <TableCell align="center" sx={style.tableHead}>Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Order.map((dto) => (
              <TableRow
                key={dto._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{dto.card_id.number}</TableCell>
                <TableCell align="center">{dto.cashier_id?.fullname}</TableCell>
                <TableCell align="center">{totalDrink(dto._id)}</TableCell>
                <TableCell align="center">{setTime(dto.date)}</TableCell>
                <TableCell align="center">
                  {dto.isTakeAway ? (
                    <CheckIcon style={{ color: "green"}} />
                  ) : (
                    <CloseIcon style={{ color: "red"}} />
                  )}
                </TableCell>
                {/* <TableCell align="center">{dto.total_price}</TableCell> */}
                <TableCell
                  align="center"
                  onClick={() => {
                    showDetail(dto._id);
                  }}
                >
                  <MoreHorizIcon sx={{ cursor: "pointer"}}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ModalDetail
        handleClose={handleClose}
        open={open}
        orderDetail={orderDetail}
      />
    </div>
  );
}