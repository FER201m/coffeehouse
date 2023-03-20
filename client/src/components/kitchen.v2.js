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
import Pagination from "@mui/material/Pagination";
import moment from "moment";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Kitchen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/api/bills")
      .then((response) => response.json())
      .then((data) => {
        setOrder(data);
      })
      .catch((error) => console.error(error));
  }, []);
  const [orderDetail, setOrderDetail] = useState([]);

  function showDetail(id) {
    fetch(`http://localhost:8800/api/bills/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setOrderDetail(data);
      })
      .catch((error) => console.error(error));
    console.log(orderDetail);
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
          width: "65%",
          padding: 1,
          marginLeft: "auto",
          marginRight: "auto",
          border: " 1px solid #666",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Card</TableCell>
              <TableCell align="center">Cashier</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Take away</TableCell>
              <TableCell align="center">Total Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Order.map((dto) => (
              <TableRow
                key={dto._id}
                onClick={() => {
                  showDetail(dto._id);
                }}
              >
                <TableCell align="center">{dto.card_id.number}</TableCell>
                <TableCell align="center">{dto.cashier_id.fullname}</TableCell>
                <TableCell align="center">{totalDrink(dto._id)}</TableCell>
                <TableCell align="center">{setTime(dto.date)}</TableCell>

                <TableCell align="center">
                  {dto.isTakeAway ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <CloseIcon style={{ color: "red" }} />
                  )}
                </TableCell>

                <TableCell align="center">{dto.total_price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ width: "800px", marginLeft: "auto", marginRight: "auto" }}
      >
        <Box sx={style}>
          <TableContainer
            sx={{
              width: "800px",
              padding: 1,

              marginLeft: "auto",
              marginRight: "auto",
              border: " 1px solid #666",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: "600" }}>
                    Image
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "600" }}>
                    Name
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "600" }}>
                    Quantity
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "600" }}>
                    Note
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderDetail.map((odl) => (
                  <TableRow>
                    <TableCell align="center">
                      <img src={odl.drink_id.image} style={{ width: "50px" }} />
                    </TableCell>
                    <TableCell align="center">{odl.drink_id.name}</TableCell>
                    <TableCell align="center">{odl.quantity}</TableCell>
                    <TableCell align="center">
                      {odl.note ?? "XXXXXXX"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
          <Button variant="contained">Xác nhận</Button>
        </Box>
      </Modal>
    </div>
  );
}
