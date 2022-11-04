import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import itemData from "../../StaticData/itemData";
import { Box } from "@mui/material";

const Explore = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageList
        sx={{ width: "90%", height: "100%" }}
        variant="quilted"
        cols={3}
        rowHeight={200}
        gap={10}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ border: "0.01rem solid black" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Explore;
