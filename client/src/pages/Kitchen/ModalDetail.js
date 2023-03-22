import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { Box } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const style = {
  table: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    bgcolor: "#fff",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  },
  button: {
    background: "#d29232",
    "&:hover": { background: "#d29232" },
  },
  TableHead: {
    fontWeight: "600",
  },
  modal: {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

function ModalDetail(props) {
  const { handleClose, open, orderDetail, orderId } = props;
  const navigate = useNavigate(0);

  const handleComplete =  async (id) => {
    try {
      await axios.put("http://localhost:8800/api/bills/complete/"+id);
      toast.success("Complete bill")
      navigate(0)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={style.modal}
    >
      <Box sx={style.table}>
        <TableContainer
          sx={{
            width: "100%",
            padding: 1,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={style.TableHead}>
                  Image
                </TableCell>
                <TableCell align="center" sx={style.TableHead}>
                  Name
                </TableCell>
                <TableCell align="center" sx={style.TableHead}>
                  Quantity
                </TableCell>
                <TableCell align="center" sx={style.TableHead}>
                  Note
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderDetail.map((odl) => (
                <TableRow key={odl._id}>
                  <TableCell align="center">
                    <img src={odl.drink_id.image} style={{ width: "50px" }} />
                  </TableCell>
                  <TableCell align="center">{odl.drink_id.name}</TableCell>
                  <TableCell align="center">{odl.quantity}</TableCell>
                  <TableCell align="center">{odl.note ?? "XXXXXXX"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br></br>
        <Button variant="contained" sx={style.button} onClick={() => handleComplete(orderId)}>
          Xác nhận
        </Button>
      </Box>
    </Modal>
  );
}

export default ModalDetail;
