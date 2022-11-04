import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const StoryPerson = ({ name, image }) => {
  return (
    <Box
      display="flex"
      component="li"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={1}
      p={1}
    >
      <Avatar
        alt={name}
        src={image}
        component="span"
        sx={{
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: " #d53a9d",
          borderRadius: "50%",
        }}
      />

      <Typography variant="span" sx={{ fontSize: "0.7rem" }}>
        {name}
      </Typography>
    </Box>
  );
};

export default StoryPerson;
