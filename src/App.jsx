import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/UI-Components/Home/Home";
import {
  Box,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from "@mui/material";
// import Navbar from "./components/Layouts/Navbar";
import {
  themeContext,
  searchContext,
  postNewFileContext,
  userContext
  
} from "./Contexts/Context";
import Inbox from "./components/UI-Components/Inbox/Inbox";
import Explore from "./components/UI-Components/Explore/Explore";
import Search from "./components/UI-Components/Search/Search";
import Profile from "./components/UI-Components/Profile/Profile";
import Sidebar from "./components/Layouts/Sidebar";
import NotFound from "./components/UI-Components/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/UI-Components/Login/Login";


const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      // primary: {
      //   main: "#00000",
      //   light:'#00000',
      //   // dark:'#000'
      // }
    },
  });
  const [file, setFile] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState(null);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        {/* <Box bgcolor={"background.default"} color="text.primary" pb={5}> */}
        <themeContext.Provider value={{ mode, setMode }}>
          {/* <Navbar /> */}
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
            }}
            spacing={1}
          >
            <userContext.Provider value={{user,setUser}}>

           
            <searchContext.Provider value={{ searchText, setSearchText }}>
              <postNewFileContext.Provider value={{ file, setFile }}>
                <Sidebar />
                <ToastContainer />
              </postNewFileContext.Provider>

              <Box flex={3} component="div" pt={2}>
                <Routes>
                  <Route index element={user === null ? <Login /> : <Home />} />
                  <Route
                    path="inbox"
                    element={user === null ? <Login /> : <Inbox />}
                  />
                  <Route
                    path="explore"
                    element={user === null ? <Login /> : <Explore />}
                  />
                  <Route
                    path="search"
                    element={user === null ? <Login /> : <Search />}
                  />
                  <Route
                    path="profile"
                    element={user === null ? <Login /> : <Profile />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Box>
            </searchContext.Provider>
            </userContext.Provider>
          </Stack>
        </themeContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
