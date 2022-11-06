import {
  Box,
  Button,
  Grid,
  InputBase,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { searchContext, themeContext } from "../../../Contexts/Context";
import { Search as SearchIcon } from "@mui/icons-material";
import { persons, posts as personPosts } from "../../StaticData/users";

const SearchInputBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "0 2rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const StyledSearchResult = styled(Box)({
  display: "block",
  padding: "0 2rem",
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
          padding: "1rem 3rem",
        }}
      >
        <SearchInputBox>
          <Box
            gap={1}
            p={1}
            sx={{
              backgroundColor: mode === "dark" ? "#262626" : "#fafafa",
              width: "80%",
              display: "flex",
              alignItems: "center",
              height: "3rem",
              borderRadius: "0.5rem",
            }}
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
            // color="success"
            size="small"
            sx={{
              backgroundColor: mode === "dark" ? "#fafafa" : "#262626",
              height: "3rem",
              borderRadius: "0.5rem",
              '&:hover':{
                opacity:'0.7',
                backgroundColor: mode === "dark" ? "#fafafa" : "#262626",
              }
            }}
            onClick={(e) => setResult(true)}
          >
            <Typography> Search</Typography>
          </Button>
        </SearchInputBox>
        {/* <StyledSearchResult>
          <Typography variant="span">Search Text: </Typography>
          <Typography variant="span">{searchText} </Typography>
          {result ? (
            <Typography variant="span">Search Results </Typography>
          ) : (
            <></>
          )}
        </StyledSearchResult> */}

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {personPosts.map((post, index) => {
            if (
              post.title.includes(searchText) ||
              post.description.includes(searchText)
            )
              return (
                <Grid item xs={2} sm={4} md={4}>
                  <GridItem image={post.image} />
                </Grid>
              );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export default Search;
