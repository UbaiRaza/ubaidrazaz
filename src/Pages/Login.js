import { Stack, Paper, Typography, Button } from "@mui/material";
import { Input_Component } from "./Input_COmponent.jsx/Input_COmponent";
import Dashboadrd from './Dashboard/index'
// import { credentials_data } from "../utils/credentials_data";
import { useState } from "react";
import { credentials_data } from "../Utill/credentials_data";

const Login = () => {
  // let userdata = {}
  const [userData, setUserData] = useState({});


  const onChangeHandle = (e) => {
    const { value, id } = e.target;
    // console.log(userData);
    // console.log(value, id);

    setUserData({ ...userData, [id]: value });
    // ...
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const { username, password } = userData;
    if (
      username === credentials_data.username &&
      password === credentials_data.password
    ) {
      // alert("correct credentials");
      localStorage.setItem("isLoggedIn", true);

    } else {
      alert("Invalid credentials!");
    }

    // credentials_data
  };
  return (
    <Stack className="min-h-[100dvh] justify-center items-center">
      <div className="max-w-md">
        <Paper
          component="form"
          onSubmit={submitHandle}
          elevation={10}
          sx={{ px: 2, py: 3 }}
        >
          <Typography align="center" fontWeight="bold" variant="h5">
            Login
          </Typography>
          {/* <Stack spacing={3}> */}
          <Input_Component
            placeholder="Enter Username"
            type="text"
            id="username"
            onChange={onChangeHandle}
            required={true}
          />
          <Input_Component
            placeholder="Enter Password"
            type="password"
            id="password"
            onChange={onChangeHandle}
            required={true}
          />
          <a href={Dashboadrd}>
            <Button
              // onClick={submitHandle}
              type="submit"
              sx={{ width: "100%", mt: 2 }}
              variant="contained"
              color="success"
            >
              Submit
            </Button>
          </a>

          {/* </Stack> */}
        </Paper>
      </div>
    </Stack>
  );
};

export { Login };