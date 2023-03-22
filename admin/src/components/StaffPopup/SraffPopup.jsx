import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Zoom,
} from "@mui/material";
import React, { useState } from "react";
import useFormatMoney from "~/hooks/useFormatMoney";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const style = {
  container: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    right: "0",
    zIndex: "1",
    backgroundColor: "#a0a0a04a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "auto",
    padding: "40px 30px",
    height: "auto",
    backgroundColor: "white",
    borderRadius: "5px",
    position: "relative",
    display: "flex",
  },
  image: {
    width: "50px",
    height: "auto",
    objectFit: "contain",
    marginBottom: "20px",
  },
  name: {
    fontWeight: "bold",
  },
  price: {
    color: "#876445",
    fontWeight: "bold",
    fontSize: "20px",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    position: "relative",
    width: "100%",
  },
  icons: {
    position: "absolute",
    right: "20px",
    top: "20px",
  },
  button: {
    padding: "10px 15px",
    fontWeight: "bold",
    backgroundColor: "#876445",
    outline: "none",
    border: "none",
    color: "#F4DFBA",
    borderRadius: "2px",
  },
  inputFile: {
    width: "120px",
    // backgroundColor: 'black',
    height: "120px",
    borderRadius: "10px",
    border: "dashed 3px #876445",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: "50px",
    color: "#876445",
  },
  delete: {
    position: "absolute",
    top: "70px",
    fontWeight: "bold",
    backgroundColor: "#876445",
    outline: "none",
    border: "none",
    color: "#F4DFBA",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function SraffPopup({ user, onClose, setStaff, Staff }) {
  const [name, setName] = useState(user ? user.fullname : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [phone, setPhone] = useState(user ? user.phone : "");
  const [address, setAddress] = useState(user ? user.address : "");
  const [gender, setGender] = useState(user ? user.gender : "");
  const [avatar, setAvatar] = useState(user ? user.avatar : "");
  const [role, setRole] = useState(user ? user.role : "");
  const [dob, setdob] = useState(user ? user.dob : "");
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onUpdateStaff = () => {
    const data = {
      fullname: name,
      email: email,
      phone: phone,
      address: address,
      gender: gender,
      role: role,
      dob: dob,
      id: user.id,
      _id: user._id,
      status: true,
    };

    const userTmp = [...Staff];
    const updateIndex = userTmp.findIndex((staff) => staff._id == user._id);
    userTmp[updateIndex] = data;
    console.log(userTmp[updateIndex]);
    setStaff(userTmp);
  };

  const handleChange = (newValue) => {
    setdob(newValue);
  };

  const handleChangeGender = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
  };

  const handleChangeRole = (event) => {
    console.log(event.target.value);
    setRole(event.target.value);
  };

  const onAddNewStaff = () => {
    const id = uuidv4();
    const data = {
      fullname: name,
      email: email,
      phone: phone,
      address: address,
      gender: gender,
      role: role,
      dob: dob,
      id: user ? user.id : id,
      _id: user ? user.id : id,
      status: true,
    };

    setStaff((staff) => [...staff, data]);
  };

  return (
    <Box sx={style.container}>
      <Zoom in={true}>
        <Box sx={style.box}>
          <Box sx={style.content}>
            {!avatar ? (
              <img
                src="https://th.bing.com/th/id/R.fa62247ebf75fea31e055c79dffad9d9?rik=j9%2fx5lHZXxx%2bpg&pid=ImgRaw&r=0"
                style={style.image}
                alt=""
              />
            ) : (
              <img src={avatar} style={style.image} alt="" />
            )}
            <TextField
              id="standard-password-input"
              label="Fullname"
              type="text"
              variant="standard"
              sx={{ width: "300px" }}
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="standard-password-input"
              label="Email"
              variant="standard"
              sx={{ width: "300px" }}
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id="standard-password-input"
              label="Phone"
              type="number"
              autoComplete="current-password"
              variant="standard"
              sx={{ width: "300px" }}
              defaultValue={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <TextField
              id="standard-password-input"
              label="Address"
              autoComplete="current-password"
              variant="standard"
              sx={{ width: "300px" }}
              defaultValue={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Box sx={{ width: "300px", display: "flex", gap: "10px" }}>
              <FormControl sx={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  defaultValue={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  defaultValue={role}
                  onChange={handleChangeRole}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="cashier">Cashier</MenuItem>
                  <MenuItem value="bartender">Bartender</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: "100%", display: "flex" }}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                sx={{ width: "100%" }}
              >
                <DesktopDatePicker
                  label="Date of birth    "
                  inputFormat="MM/DD/YYYY"
                  renderInput={(params) => <TextField {...params} />}
                  sx={{ width: "100%" }}
                  value={dayjs(dob)}
                  onChange={handleChange}
                />
              </LocalizationProvider>
            </Box>
            {isLoading ? (
              <Box sx={{ height: "100px", width: "100px" }}>
                <CircularProgress />
              </Box>
            ) : user ? (
              <button
                onClick={onUpdateStaff}
                className="hover"
                style={style.button}
              >
                Save
              </button>
            ) : (
              <button
                onClick={onAddNewStaff}
                className="hover"
                style={style.button}
              >
                Save
              </button>
            )}
          </Box>
          <CloseIcon
            className="hover"
            onClick={() => onClose(null)}
            style={style.icons}
          />
        </Box>
      </Zoom>
    </Box>
  );
}

export default SraffPopup;
