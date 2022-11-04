import {
  AccountCircle,
  Bookmark,
  DarkMode,
  ReportGmailerrorred,
  Settings,
  SwapHoriz,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Badge,
  AppBar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Paper,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  List,
  ListItemIcon,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  postNewFileContext,
  searchContext,
  themeContext,
  userContext,
} from "../../Contexts/Context";
import AddPost from "../UI-Components/Post/AddPost";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  height: "auto",
  // minWidth:'100%',
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    position: "fixed",
    width: "20%",
  },
}));
const StyledLogo = styled("div")({
  display: "flex",
  alignItems: "center",
  // width: "100%",
  justifyContent: "start",
});
const Search = styled("div")(({ theme }) => ({
  padding: "2px 8px",
  width: "40%",
  color: "text.primary",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Icons = styled(List)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const StyledTag = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
// const StyledListItemText = styled(ListItemText)({
//     color:mode === "dark" ? "#000000" : "#fafafa"
// })
const Sidebar = () => {
  const { mode, setMode } = useContext(themeContext);
  const { file, setFile } = useContext(postNewFileContext);
  const { user, setUser } = useContext(userContext);

  const { searchText, setSearchText } = useContext(searchContext);
  const [anchorEl, setanchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [addPostDialogOpen, setAddPostDialogOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const handleClose = (e) => {
    setanchorEl(null);
  };
  const [value, setValue] = useState("Home");

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
  };
  // const location = useLocation();
  // const path = location.pathname;
  // console.log( );
  // location.pathname.contains('profile')
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: mode === "dark" ? "#000000" : "white",
          flex: 0.5,
          display: user === null ? "none" : "block",
          // height: "100vh",
          // width:'50%',
          padding: { sm: "2rem 0" },
          minWidth: { xs: "auto", sm: "30%", md: "20%" },
          minHeight: { xs: "auto", sm: "100vh" },
        }}
      >
        <StyledToolbar>
          <StyledLogo>
            <Box component={Link} to="/">
              <svg
                aria-label="Instagram"
                color={mode === "dark" ? "#fafafa" : "#262626"}
                fill="#262626"
                height="29"
                role="img"
                viewBox="32 4 113 32"
                width="103"
              >
                <path
                  clipRule="evenodd"
                  d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </Box>

            {/* <IconButton>
              <svg
                aria-label="Down Chevron Icon"
                color={mode === "dark" ? "#fafafa" : "#262626"}
                fill={mode === "dark" ? "#fafafa" : "#262626"}
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <path d="M12 17.502a1 1 0 0 1-.707-.293l-9-9.004a1 1 0 0 1 1.414-1.414L12 15.087l8.293-8.296a1 1 0 0 1 1.414 1.414l-9 9.004a1 1 0 0 1-.707.293Z"></path>
              </svg>
            </IconButton> */}
          </StyledLogo>

          <Search
            sx={{
              backgroundColor: mode === "dark" ? "#3B3B3B" : "whitesmoke",
            }}
          >
            <SearchIcon
              sx={{
                width: "20px",
                height: "20px",
                color: mode === "dark" ? "#fafafa" : "#262626",
              }}
            />
            <Box
              component={Link}
              to="/search"
              sx={{
                textDecoration: "none",
                color: mode === "dark" ? "#fafafa" : "#262626",
              }}
            >
              <InputBase
                placeholder="Search"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                sx={{
                  color: mode === "dark" ? "#fafafa" : "#262626",
                }}
              />
            </Box>
          </Search>

          <Icons>
            {/* <List > */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <svg
                    aria-label="Home"
                    color={mode === "dark" ? "#fafafa" : "#262626"}
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  sx={{
                    color: mode === "dark" ? "#fafafa" : "#000000",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/search">
                <ListItemIcon>
                  <svg
                    aria-label="Search"
                    color={mode === "dark" ? "#fafafa" : "#262626"}
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
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
                      x1="16.511"
                      x2="22"
                      y1="16.511"
                      y2="22"
                    ></line>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Search"
                  sx={{
                    color: mode === "dark" ? "#fafafa" : "#000000",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/explore">
                <ListItemIcon>
                  {" "}
                  <svg
                    aria-label="Find people"
                    color={mode === "dark" ? "#fafafa" : "#262626"}
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <polygon
                      fill="none"
                      points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>
                    <polygon
                      fillRule="evenodd"
                      points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                    ></polygon>
                    <circle
                      cx="12.001"
                      cy="12.005"
                      fill="none"
                      r="10.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></circle>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color: mode === "dark" ? "#fafafa" : "#000000",
                  }}
                  primary="Explore"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/inbox">
                <ListItemIcon>
                  {" "}
                  <Badge
                    badgeContent={4}
                    color="error"
                    max={10}
                    overlap="circular"
                  >
                    <svg
                      aria-label="Messenger"
                      color={mode === "dark" ? "#fafafa" : "#262626"}
                      fill={mode === "dark" ? "#fafafa" : "#262626"}
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path
                        d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="1.739"
                      ></path>
                      <path
                        d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Badge>
                </ListItemIcon>
                <ListItemText
                  primary="Messages"
                  sx={{
                    color: mode === "dark" ? "#fafafa" : "#000000",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="button"
                onClick={() => {
                  setShowNotification(!showNotification);
                }}
              >
                <ListItemIcon>
                  <svg
                    aria-label="Activity Feed"
                    color={mode === "dark" ? "#fafafa" : "#262626"}
                    fill={mode === "dark" ? "#fafafa" : "#262626"}
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Notification"
                  sx={{
                    color: mode === "dark" ? "#fafafa" : "#000000",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="button"
                onClick={(e) => setAddPostDialogOpen(true)}
              >
                <ListItemIcon>
                  {" "}
                  <svg
                    aria-label="New post"
                    color={mode === "dark" ? "#fafafa" : "#262626"}
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
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
                      x1="6.545"
                      x2="17.455"
                      y1="12.001"
                      y2="12.001"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="12.003"
                      x2="12.003"
                      y1="6.545"
                      y2="17.455"
                    ></line>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Create"
                  sx={{
                    color: mode === "dark" ? "#fafafa" : "#000000",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <AddPost
              addPostDialogOpen={addPostDialogOpen}
              setAddPostDialogOpen={setAddPostDialogOpen}
            />
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/profile">
                <ListItemIcon>
                  <Avatar
                    // onClick={(e) => setanchorEl(e.currentTarget)}
                    alt="Person"
                    src="https://4data.ro/wp-content/uploads/2016/12/person.png"
                    sx={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Profile"
                  sx={{
                    color: mode === "dark" ? "#fafafa" : "#000000",
                  }}
                />
              </ListItemButton>
            </ListItem>
            {/* </List> */}
          </Icons>

          {/* <StyledTag>
            <svg
              height="22"
              viewBox="0 0 24 24"
              color={mode === "dark" ? "#fafafa" : "#262626"}
              fill={mode === "dark" ? "#fafafa" : "#262626"}
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13.001 18c-.047 0-.094-.004-.142-.013-.406-.078-.674-.47-.596-.877l2-10.5c.077-.408.468-.673.877-.597.406.078.674.47.596.877l-2 10.5c-.068.36-.382.61-.735.61z"></path>
              <path d="m9.001 18c-.047 0-.094-.004-.142-.013-.406-.078-.674-.47-.596-.877l2-10.5c.077-.408.469-.673.877-.597.406.078.674.47.596.877l-2 10.5c-.068.36-.382.61-.735.61z"></path>
              <path d="m17.25 15h-10.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10.5c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
              <path d="m17.25 10.5h-10.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10.5c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
              <path d="m21.25 24h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-18.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v18.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-18.5c0-.689-.561-1.25-1.25-1.25z"></path>
            </svg>
          </StyledTag> */}
          <Icons>
            <ListItem disablePadding>
              <ListItemButton
                component="button"
                onClick={(e) => setanchorEl(e.currentTarget)}
              >
                <ListItemIcon>
                  <svg
                    aria-label="Settings"
                    color={mode === "dark" ? "#fafafa" : "#262626"}
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="3"
                      x2="21"
                      y1="4"
                      y2="4"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="3"
                      x2="21"
                      y1="12"
                      y2="12"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="3"
                      x2="21"
                      y1="20"
                      y2="20"
                    ></line>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="More"
                  sx={{
                    color: mode === "dark" ? "#fafafa" : "#000000",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Icons>

          <UserBox>
            <Typography variant="span">Misst</Typography>
            <Avatar
              onClick={(e) => setanchorEl(e.currentTarget)}
              alt="Person"
              src="https://4data.ro/wp-content/uploads/2016/12/person.png"
              sx={{ width: "24px", height: "24px" }}
            />
          </UserBox>
        </StyledToolbar>

        <Menu
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <MenuItem
            component={Link}
            to="/profile"
            onClick={handleClose}
            disableRipple
          >
            <AccountCircle sx={{ marginRight: "10px" }} />
            Profile
          </MenuItem>
          <Divider />
          <MenuItem
            component={Link}
            to="/profile/saved"
            onClick={handleClose}
            disableRipple
          >
            <Bookmark sx={{ marginRight: "10px" }} />
            Saved
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={(e) => {
              setMode(mode === "light" ? "dark" : "light");
              setanchorEl(null);
            }}
            disableRipple
          >
            <DarkMode sx={{ marginRight: "10px" }} />
            Switch appearance
          </MenuItem>
          <Divider />
          <MenuItem
            component={Link}
            to="/accounts/edit"
            onClick={handleClose}
            disableRipple
          >
            <Settings sx={{ marginRight: "10px" }} />
            Settings
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple>
            <ReportGmailerrorred sx={{ marginRight: "10px" }} />
            Report a problem
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} disableRipple>
            <SwapHoriz sx={{ marginRight: "10px" }} />
            Switch accounts
          </MenuItem>
          <Divider />

          <MenuItem
            component={Link}
            to="/"
            onClick={(e) => {
              setanchorEl(null);
              setUser(null);
            }}
            disableRipple
          >
            Log out
          </MenuItem>
        </Menu>

        <Paper
          // elevation={2}
          sx={{
            display: showNotification ? "block" : "none",
            top: "0",

            left: "16rem",
            width: "100%",
            height: "100vh",
            maxWidth: 400,
            padding: "20px 0",

            backgroundColor: mode === "dark" ? "#262626" : "#fafafa",
            color: mode === "dark" ? "#fafafa" : "#262626",
            position: "fixed",
          }}
        >
          <Box height="100%" width="100%" sx={{ overflowY: "scroll" }}>
            <Typography variant="h6" px={2}>
              Notifications
            </Typography>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ display: "flex", gap: "10px" }}>
                <Avatar src="" />
                <ListItemText primary={"Mira started following you"} />
                <img
                  width={50}
                  height={50}
                  src="https://media.gettyimages.com/photos/one-business-woman-looking-at-camera-picture-id1278529214?s=612x612"
                />
              </ListItemButton>
            </ListItem>
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ display: "flex", gap: "10px" }}>
                <Avatar src="" />
                <ListItemText primary={"Mira started following you"} />
                <img
                  width={50}
                  height={50}
                  src="https://media.gettyimages.com/photos/one-business-woman-looking-at-camera-picture-id1278529214?s=612x612"
                />
              </ListItemButton>
            </ListItem>
          </Box>
        </Paper>
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
          }}
          elevation={3}
        >
          <BottomNavigation
            sx={{ display: { xl: "flex", sm: "none" }, width: "100%" }}
            value={value}
            onChange={handleNavigationChange}
          >
            <BottomNavigationAction
              label="Home"
              value="Home"
              icon={
                <Box component={Link} to="/">
                  <svg
                    aria-label="Home"
                    color={mode === "dark" ? "#fafafa" : "#262626"}
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </Box>
              }
            />
            <BottomNavigationAction
              label="Search"
              value="Search"
              icon={
                <Box
                  component={Link}
                  to="/search"
                  sx={{
                    textDecoration: "none",
                    color: mode === "dark" ? "#fafafa" : "#262626",
                  }}
                >
                  <svg
                    aria-label="Search and explore"
                    fill={mode === "dark" ? "#fafafa" : "#262626"}
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
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
                      x1="16.511"
                      x2="22"
                      y1="16.511"
                      y2="22"
                    ></line>
                  </svg>
                </Box>
              }
            />
            <BottomNavigationAction
              label="Post"
              value="Post"
              icon={
                <Button component="label">
                  <svg
                    aria-label="New post"
                    color={mode === "dark" ? "#fafafa" : "#262626"}
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
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
                      x1="6.545"
                      x2="17.455"
                      y1="12.001"
                      y2="12.001"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="12.003"
                      x2="12.003"
                      y1="6.545"
                      y2="17.455"
                    ></line>
                  </svg>
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      setAddPostDialogOpen(true);
                    }}
                  />
                </Button>
              }
            />
            <BottomNavigationAction
              label="Message"
              value="Message"
              icon={
                <Box component={Link} to="/inbox">
                  <Badge
                    badgeContent={4}
                    color="error"
                    max={10}
                    overlap="circular"
                  >
                    <svg
                      aria-label="Messenger"
                      color={mode === "dark" ? "#fafafa" : "#262626"}
                      fill={mode === "dark" ? "#fafafa" : "#262626"}
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path
                        d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="1.739"
                      ></path>
                      <path
                        d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Badge>
                </Box>
              }
            />
            <BottomNavigationAction
              label="Profile"
              value="Profile"
              icon={
                <Box component={Link} to="/profile">
                  <Avatar
                    // onClick={(e) => setanchorEl(e.currentTarget)}
                    alt="Person"
                    src="https://4data.ro/wp-content/uploads/2016/12/person.png"
                    sx={{ width: "24px", height: "24px", cursor: "pointer" }}
                  />
                </Box>
              }
            />
          </BottomNavigation>
        </Paper>
      </AppBar>
    </>
  );
};

export default Sidebar;
