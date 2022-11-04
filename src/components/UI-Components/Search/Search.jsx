import {
  Box,
  Button,
  InputBase,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { searchContext, themeContext } from "../../../Contexts/Context";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchInputBox = styled(Box)(({theme})=>({
  display: "flex",
  flexDirection: "row",
  padding:'0 2rem',
  justifyContent: "center",
  gap: "1rem",
  [theme.breakpoints.down('sm')]:{
    display:'none'
  }
}));
const StyledSearchResult = styled(Box)({
  display: "block",
  padding: "0 2rem",
});
const Search = () => {
  const { mode, setMode } = useContext(themeContext);
  const { searchText, setSearchText } = useContext(searchContext);
  const [result, setResult] = useState(false);
  return (
    <>
      <Stack
        direction="column"
        justifyContent="start"
        sx={{
          height: "100vh",
        }}
      >
        <SearchInputBox>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            p={1}
            height="3rem"
            bgcolor="#fafafa"
            width="80%"
          >
            <SearchIcon
              sx={{
                width: "1.9rem",
                height: "1.9rem",
                color: mode === "dark" ? "#fafafa" : "#262626",
              }}
            />

            <InputBase
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{
                color: mode === "dark" ? "#fafafa" : "#262626",
                width: "100%",
              }}
            />
          </Box>

          <Button
            variant="contained"
            color="success"
            size="small"
            sx={{
              height: "2.5rem",
            }}
            onClick={(e) => setResult(true)}
          >
            <Typography> Search</Typography>
          </Button>
        </SearchInputBox>
        <StyledSearchResult>
          <Typography variant="span">Search Text: </Typography>
          <Typography variant="span">{searchText} </Typography>
          {
            result ? <Typography variant="span">Search Results </Typography>:<></>
          }
        </StyledSearchResult>
      </Stack>
    </>
  );
};

export default Search;
