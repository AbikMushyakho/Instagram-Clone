import {
  Avatar,
  Box,
  Button,
  Link,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import images from "../StaticData/persons";
import { persons } from "../StaticData/users";
const Rightbar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(persons);
  }, []);

  return (
    <>
      <Box
        p="35px 10px"
        sx={{
          display: { xs: "none", sm: "block" },
          maxHeight: "400px",
          maxWidth: "350px",
          marginLeft: "10px",
        }}
        flex={0.5}
        bgcolor="background.paper"
      >
        <Stack spacing={1}>
          <Box
            component="div"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            gap={1}
          >
            <Avatar
              src={images.one}
              sx={{ cursor: "pointer", width: "50px", height: "50px" }}
            />
            <Box
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="button" sx={{ cursor: "pointer" }}>
                MisstVlog
              </Typography>
              <Typography color="text.secondary">Abik</Typography>
            </Box>
            <Button>Switch</Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="span"
              color="text.secondary"
              fontWeight={600}
              fontSize="12px"
            >
              Suggestions for you
            </Typography>
            <Button variant="span" sx={{ fontWeight: 100, fontSize: "12px" }}>
              See All
            </Button>
          </Box>

          {users.map((user, index) => {
            return (
              <Box
                component="div"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                gap={1}
              >
                <Avatar
                  src={user.image}
                  sx={{ cursor: "pointer", width: "35px", height: "35px" }}
                />
                <Box
                  sx={{
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="button" sx={{ cursor: "pointer" }}>
                    {user.name}
                  </Typography>
                  <Typography color="text.secondary">{user.name}123</Typography>
                </Box>
                <Button size="small">Follow</Button>
              </Box>
            );
          })}

          {/* <Box
            component="div"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            gap={1}
          >
            <Avatar
              src={images.three}
              sx={{ cursor: "pointer", width: "35px", height: "35px" }}
            />
            <Box
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="button" sx={{ cursor: "pointer" }}>
                Mark Jug
              </Typography>
              <Typography color="text.secondary">Jug123</Typography>
            </Box>
            <Button size="small">Follow</Button>
          </Box>

          <Box
            component="div"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            gap={1}
          >
            <Avatar
              src={images.two}
              sx={{ cursor: "pointer", width: "35px", height: "35px" }}
            />
            <Box
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="button" sx={{ cursor: "pointer" }}>
                Nita
              </Typography>
              <Typography color="text.secondary">Nita123</Typography>
            </Box>
            <Button size="small">Follow</Button>
          </Box>
          <Box
            component="div"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            gap={1}
          >
            <Avatar
              src={images.three}
              sx={{ cursor: "pointer", width: "35px", height: "35px" }}
            />
            <Box
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="button" sx={{ cursor: "pointer" }}>
                Mark Jug
              </Typography>
              <Typography color="text.secondary">Jug123</Typography>
            </Box>
            <Button size="small">Follow</Button>
          </Box> */}
        </Stack>

        <Stack
          my={2}
          spacing={2}
          direction="row"
          display="flex"
          flexWrap="wrap"
          fontSize="14px"
          // sx={{ display: "flex", }}
        >
          <Link href="#" underline="hover" color="text.secondary">
            About
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Help
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Press
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Api
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Jobs
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Privacy
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Terms
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Locations
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Language
          </Link>
        </Stack>
        <Typography fontSize="14px" color="text.secondary">
          © 2022 INSTAGRAM FROM META
        </Typography>
      </Box>
    </>
  );
};

export default Rightbar;
