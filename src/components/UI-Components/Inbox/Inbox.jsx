import {
  FavoriteBorder,
  ImageOutlined,
  InfoOutlined,
  InsertEmoticon,
  KeyboardArrowDown,
  PhoneOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import messages from "../../StaticData/Messages";
import { themeContext } from "../../../Contexts/Context";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10rem 0",
  height: "105vh",
  gap: "10px",
  width: "100%",
});
const StyledTab = styled(Box)(({ theme }) => ({
  borderBottom: 1,
  borderColor: "divider",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
    // height: "auto",
  },
}));
const StyledChatBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  // height: "88vh",
  // margin:'3rem 0',
  gap: "0.5rem",
  width: "100%",
});

const StyledChatBoxFooter = styled(Box)({
  border: "1px solid gray",
  borderRadius: "20px",
  padding: "4px 15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // width: "100%",
});
const Inbox = () => {
  const { mode } = useContext(themeContext);
  const [value, setValue] = useState(0);
  const [person, setPerson] = useState(null);
  const [chatPersonMessages, setChatPersonMessages] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xl: "column", sm: "row" },
          justifyContent: "center",
        }}
        my="0.5rem"
      >
        <Paper
          elevation={2}
          sx={{
            width: {
              xl: "100%",
              sm: "25rem",
            },
            height: "100%",
            display: { xs: person === null ? "block" : "none", sm: "block" },
          }}
        >
          <Box
            display="flex"
            py={1}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              sx={{
                transform: "rotate(-90deg)",
                display: { xl: "block", sm: "none" },
              }}
            >
              <svg
                aria-label="Back"
                color={mode === "dark" ? "#fafafa" : "#262626"}
                fill={mode === "dark" ? "#fafafa" : "#262626"}
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
              </svg>
            </IconButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ width: "70%" }}
            >
              <Typography>misst_Vlog</Typography>
              <IconButton>
                <KeyboardArrowDown />
              </IconButton>
            </Box>
            <IconButton>
              <svg
                aria-label="New message"
                color={mode === "dark" ? "#fafafa" : "#262626"}
                fill="#fafafa"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <path
                  d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="16.848"
                  x2="20.076"
                  y1="3.924"
                  y2="7.153"
                ></line>
              </svg>
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ width: "100%" }}>
            <StyledTab>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                // sx={{
                //   display:{xl:'none',sm:'block'}
                // }}
                //   indicatorColor=""
                //   textColor="black"
              >
                <Tab label="Primary" />
                <Tab label="General" />
              </Tabs>
            </StyledTab>
            <Stack
              sx={{ overflowY: "scroll", height: "90vh", flexWrap: "nowrap" }}
            >
              {messages.map((msg, index) => {
                return (
                  <Stack
                    direction="row"
                    onClick={(e) => {
                      // person(msg.name);

                      const personArray = messages.filter(
                        (message) => message.name === msg.name
                      );
                      setPerson(personArray[0]);
                      setChatPersonMessages(personArray[0].message);
                    }}
                    p={1}
                    spacing={2}
                    key={index}
                    sx={{ cursor: "pointer" }}
                  >
                    <Avatar
                      sx={{ width: "50px", height: "50px" }}
                      src={msg.image}
                    />
                    <Box display="flex" flexDirection="column">
                      <Typography fontWeight={400} variant="span">
                        {msg.name}
                      </Typography>
                      <Typography variant="span" fontWeight={200}>
                        {" "}
                        sent a message
                      </Typography>
                    </Box>
                  </Stack>
                );
              })}
            </Stack>
          </Box>
        </Paper>

        <Paper
          elevation={2}
          sx={{
            display: { xs: person === null ? "none" : "block", sm: "block" },
            // width: "25rem",
            width: {
              xl: "100%",
              sm: "25rem",
            },
            height: "100%",
          }}
        >
          {person === null ? (
            <StyledBox>
              <svg
                aria-label="Direct"
                color={mode === "dark" ? "#fafafa" : "#262626"}
                fill="#fafafa"
                height="96"
                role="img"
                viewBox="0 0 96 96"
                width="96"
              >
                <circle
                  cx="48"
                  cy="48"
                  fill="none"
                  r="47"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></circle>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="69.286"
                  x2="41.447"
                  y1="33.21"
                  y2="48.804"
                ></line>
                <polygon
                  fill="none"
                  points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
              <Typography variant="h6" fontWeight={300}>
                Your messages
              </Typography>
              <Typography variant="span" fontWeight={100} fontSize="12px">
                Send private photos and messages to a friend or group.
              </Typography>
              <Button variant="contained">Send Message</Button>
            </StyledBox>
          ) : (
            // <></>
            <Stack direction="column" sx={{height:'90vh'}}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",

                  // border: "1px solid gray",
                  padding: "0.5rem",
                }}
                elevation={1}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "0.5rem",
                  }}
                >
                  <IconButton>
                    <Avatar
                      src={person !== null ? person.image : ""}
                      sx={{ width: "1.5rem", height: "1.5rem" }}
                    />
                  </IconButton>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="span" fontWeight={500}>
                      {person.name}
                    </Typography>
                    <Typography fontWeight={100} fontSize="12px" variant="span">
                      Active 2h ago
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton aria-label="Call" component="label">
                    <PhoneOutlined sx={{ fontSize: "1.6rem" }} />
                  </IconButton>
                  <IconButton aria-label="Video" component="label">
                    <VideocamOutlined sx={{ fontSize: "1.6rem" }} />
                  </IconButton>{" "}
                  <IconButton aria-label="Info" component="label">
                    <InfoOutlined sx={{ fontSize: "1.6rem" }} />
                  </IconButton>
                </Box>
              </Paper>
              <Box width="100%" >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    overflowY: "scroll",
                    height: "62vh",
                    flexWrap: "nowrap",
                    padding: "3rem 2rem",
                    gap: "0.8rem",
                  }}
                >
                  {/* map */}
                  {chatPersonMessages.length > 0 ? (
                    chatPersonMessages.map((msg, index) => {
                      return (
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "start",
                            gap: "0.8rem",
                          }}
                          key={index}
                        >
                          <Avatar
                            src={person !== null ? person.image : ""}
                            sx={{ width: "1rem", height: "1rem" }}
                          />

                          <Typography variant="span">{msg}</Typography>
                        </Box>
                      );
                    })
                  ) : (
                    <Typography variant="span">No Message yet</Typography>
                  )}
                </Box>
              </Box>
              <Box width="100%" px={2}>
                <StyledChatBoxFooter>
                  <IconButton aria-label="Send a emoji" component="label">
                    <InsertEmoticon
                      sx={{ width: "1.5rem", height: "1.5rem" }}
                    />
                  </IconButton>
                  <InputBase
                    placeholder="Message ..."
                    sx={{ width: "80%" }}
                    onKeyPress={(ev) => {
                      if (ev.key === "Enter" && ev.target.value !== "") {
                        ev.preventDefault();

                        setChatPersonMessages([
                          ...chatPersonMessages,
                          ev.target.value,
                        ]);
                        ev.target.value = null;
                      }
                    }}
                  />

                  <Box display="flex">
                    <IconButton aria-label="upload picture" component="label">
                      <input hidden accept="image/*" type="file" />
                      <ImageOutlined
                        sx={{ width: "1.5rem", height: "1.5rem" }}
                      />
                    </IconButton>
                    <IconButton aria-label="Send a heart" component="label">
                      <FavoriteBorder
                        sx={{ width: "1.5rem", height: "1.5rem" }}
                      />
                    </IconButton>
                  </Box>
                </StyledChatBoxFooter>
              </Box>
            </Stack>
          )}
        </Paper>
      </Stack>
    </>
  );
};

export default Inbox;
