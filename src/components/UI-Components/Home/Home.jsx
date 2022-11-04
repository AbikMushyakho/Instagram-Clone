import { Stack } from "@mui/material";
import React from "react";
import Feed from "./Feed";
import Rightbar from "../../Layouts/Rightbar";

const Home = () => {
  return (
    <>
      <Stack
        direction="row"
        my="10px"
        justifyContent="center"
        alignItems="start"
      >
        <Feed />
        <Rightbar />
      </Stack>
    </>
  );
};

export default Home;
