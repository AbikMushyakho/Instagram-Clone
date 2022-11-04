import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import posts from "../../StaticData/postImages";
import { themeContext } from "../../../Contexts/Context";

const StyledProfile = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  padding: "1rem",
  gap: "1rem",
});
const ProfileDetails = styled(Box)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  flex: 1,
});
const ProfileStory = styled(Box)({
  display: "flex",
  justifyContent: "start",
  width: "100%",
  gap: "2rem",
  padding: "1rem 3rem",
  overflowX: "scroll",
});
const StyledNavigator = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});
const GridItem = ({ image }) => {
  return (
    <Paper
      sx={{
        height: 200,
        width: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <img src={image} alt="image1" width="100%" height="100%" />
    </Paper>
  );
};
const Profile = () => {
  const { mode, setMode } = useContext(themeContext);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <>
      {/* <Paper
        elevation={1}
        sx={{
          width: "100%",
          display: { xs: "inline-flex", sm: "none" },
          justifyContent: "space-between",
          padding: "0 1rem",
          position: "sticky",
        }}
      >
        <IconButton
          sx={{
            display: { xl: "block", sm: "none" },
          }}
          // onClick={(e) => setanchorEl(e.currentTarget)}
        >
          <svg
            aria-label="Options"
            color={mode === "dark" ? "#fafafa" : "#262626"}
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <circle
              cx="12"
              cy="12"
              fill="none"
              r="8.635"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
            <path
              d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </IconButton>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          component="span"
          sx={{ width: "80%" }}
        >
          <Typography variant="span">misst_Vlog</Typography>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </Box>
        <IconButton>
          <svg
            aria-label="Discover people"
            color={mode === "dark" ? "#fafafa" : "#262626"}
            fill={mode === "dark" ? "#fafafa" : "#262626"}
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path>
          </svg>
        </IconButton>
      </Paper> */}
      <Stack direction="column" p={4}>
        <StyledProfile>
          <Box flex={0.5} display="flex" justifyContent="center">
            <Avatar src="" sx={{ width: "6rem", height: "6rem" }} />
          </Box>
          <ProfileDetails>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                width: "100%",
              }}
            >
              <Typography variant="h6" fontWeight={200}>
                misst_Vlog
              </Typography>
              <Button variant="outlined">Edit profile</Button>

              <Box>
                <svg
                  aria-label="Options"
                  color={mode === "dark" ? "#fafafa" : "#262626"}
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="start"
              gap={2}
              width="100%"
            >
              <Typography>94 post</Typography>
              <Typography>94 post</Typography>
              <Typography>94 post</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Typography>Abik Mushyakho</Typography>
              <Typography>
                Hello insta family.I love travelling and going for
                adventure,long tour. Also i like capturing videos and explore
                the wonder's of NEPAL. 🤟☺️
              </Typography>
            </Box>
          </ProfileDetails>
        </StyledProfile>

        <ProfileStory>
          <Avatar src="" sx={{ width: "4rem", height: "4rem" }} />
          <Avatar src="" sx={{ width: "4rem", height: "4rem" }} />
          <Avatar src="" sx={{ width: "4rem", height: "4rem" }} />
          <Avatar src="" sx={{ width: "4rem", height: "4rem" }} />
          <Avatar src="" sx={{ width: "4rem", height: "4rem" }} />
        </ProfileStory>
        <StyledNavigator>
          <Tabs value={value} onChange={handleChange} selectionFollowsFocus>
            <Tab
              icon={
                <svg
                  aria-label="Posts"
                  color={value === 0 ? "#0095f6" : "#8e8e8e"}
                  fill="#0095f6"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <rect
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    width="18"
                    x="3"
                    y="3"
                  ></rect>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="9.015"
                    x2="9.015"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="14.985"
                    x2="14.985"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21"
                    x2="3"
                    y1="9.015"
                    y2="9.015"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21"
                    x2="3"
                    y1="14.985"
                    y2="14.985"
                  ></line>
                </svg>
              }
              iconPosition="start"
              label="POSTS"
            />
            <Tab
              icon={
                <svg
                  aria-label="Saved"
                  color={value === 1 ? "#0095f6" : "#8e8e8e"}
                  fill="#8e8e8e"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></polygon>
                </svg>
              }
              iconPosition="start"
              label="SAVED"
            />
            <Tab
              icon={
                <svg
                  aria-label="Tagged"
                  color={value === 2 ? "#0095f6" : "#8e8e8e"}
                  fill="#8e8e8e"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <circle
                    cx="12.072"
                    cy="11.075"
                    fill="none"
                    r="3.556"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                </svg>
              }
              iconPosition="start"
              label="TAGGED"
            />
          </Tabs>
        </StyledNavigator>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <GridItem image={posts.image1} />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <GridItem image={posts.image2} />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <GridItem image={posts.image3} />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <GridItem image={posts.image4} />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <GridItem image={posts.image5} />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Profile;
