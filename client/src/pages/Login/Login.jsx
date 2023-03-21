import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "~/context/authContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthContext();

  const handleLoginSubmit = async () => {
    // console.log({email, password});
     await login({email, password})
  }
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          width: 350,
          height: "max-content",
          backgroundColor: "#F4DFBA",
          boxShadow: 3,
          borderRadius: 2,
          p: 4,
        }}
      >
        <Typography variant="h4" textAlign="center" p={2}>
          LOGIN
        </Typography>
        <TextField
          required
          label="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          sx={{ backgroundColor: "#f7f0e2" }}
        />
        <TextField
          required
          label="Password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          sx={{ backgroundColor: "#f7f0e2" }}
        />
        <Button variant="contained" size="large" onClick={handleLoginSubmit}>
          Login
        </Button>
      </Stack>
    </Box>
  );
}
