import { Box, Typography, Modal, TextField } from "@mui/material";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CheckIcon from "@mui/icons-material/Check";
import { Close } from "@mui/icons-material";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function Cards() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [number, setNumber] = useState();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/cards");
        res && setRows(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCards();
  }, []);

  const handleDelete = (id) => {
    // Call your API to delete the row by ID
    const deleteCard = async () => {
      try {
        await axios.delete("http://localhost:8800/api/cards/" + id);
        const newRows = rows.map((row) => {
          if (row._id === id) return { ...row, status: !row.status };
          return row;
        });
        setRows(newRows);
      } catch (err) {
        console.log(err);
      }
    };
    id && deleteCard();
  };

  const handleEnable = (id) => {
    // Call your API to delete the row by ID
    const deleteCard = async () => {
      try {
        await axios.put("http://localhost:8800/api/cards/" + id);
        const newRows = rows.map((row) => {
          if (row._id === id) return { ...row, status: !row.status };
          return row;
        });
        setRows(newRows);
      } catch (err) {
        console.log(err);
      }
    };
    id && deleteCard();
  };

  const handleAddCard = async () => {
     try {
         await axios.post("http://localhost:8800/api/cards", {number})
         toast.success("Card has been created");
         setOpen(false);
     } catch(err) {
      toast.error(err.response.data);
     }
  }

  const columns = [
    {
      name: "number",
      label: "Card Tag",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const number = tableMeta.rowData[tableMeta.columnIndex];

          return (
            <Typography variant="h5" ml={2}>
              {number}
            </Typography>
          );
        },
      },
    },
    {
      name: "actions",
      label: "Available",
      options: {
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const object = tableMeta.rowData[tableMeta.columnIndex];
          const status = object.status;
          // console.log(object);
          return (
            <>
              {status ? (
                <Tooltip title="Click to delete">
                  <IconButton
                    color="success"
                    onClick={() => handleDelete(object.id)}
                  >
                    <CheckIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Click to enable">
                  <IconButton
                    color="error"
                    onClick={() => handleEnable(object.id)}
                  >
                    <Close />
                  </IconButton>
                </Tooltip>
              )}
            </>
          );
        },
      },
    },
  ];

  const options = {
    toolbar: {
      search: "Search",
    },
    download: false,
    print: false,
    filterType: "dropdown",
    filter: false,
    selectableRows: "none",
    customSearch: (searchQuery, currentRow, columns) =>
      currentRow[0] == searchQuery,
    searchOpen: true,
    customToolbar: () => {
      return (
        <Button variant="contained" onClick={handleOpen}>
          Add New Card
        </Button>
      );
    },
  };

  return (
    <>
      <MUIDataTable
        title="Card Tags"
        data={rows.map((row) => [
          row.number,
          { status: row.status, id: row._id },
        ])}
        columns={columns}
        options={options}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a card
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              id="standard-basic"
              label="Card Tag"
              type="number"
              variant="standard"
              margin="normal"
              onChange={(event) => {
                setNumber(event.target.value);
              }}
            />
            <Button variant="contained" onClick={handleAddCard}>Create</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
