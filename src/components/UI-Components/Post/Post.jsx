import {
  Bookmark,
  BookmarkBorder,
  EmojiEmotions,
  Favorite,
  FavoriteBorder,
  InsertCommentOutlined,
  MoreVert,
  Send,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  InputBase,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

const CardComment = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 10px",
  margin: "5px 0",
});

const Post = ({ name, avatarImage, postImage, title, comments, like }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    setLikes(like);
  }, []);

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: "100%", borderRadius: "5px" }}>
        <CardHeader
          avatar={<Avatar src={avatarImage} />}
          action={
            <IconButton aria-label="settings">
              <MoreVert sx={{ transform: "rotate(-90deg)" }} />
            </IconButton>
          }
          title={name}
        />

        <CardMedia
          component="img"
          height={450}
          image={postImage}
          alt="Paella dish"
        />

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
                onChange={(e) => {
                  if (liked === false) {
                    setLikes(likes + 1);
                  } else {
                    setLikes(likes - 1);
                  }
                  setLiked(!liked);
                }}
              />
            </IconButton>
            <IconButton>
              <InsertCommentOutlined />
            </IconButton>
            <IconButton aria-label="share">
              <Send
                sx={{
                  transform: "rotate(0deg)",
                  transition: "width 2s",
                  "&:hover": {
                    transform: "rotate(-45deg)",
                  },
                }}
              />
            </IconButton>
          </div>
          <IconButton>
            <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          </IconButton>
        </CardActions>
        <CardContent sx={{ padding: "0 15px" }}>
          <Typography>{likes} likes</Typography>

          <Typography variant="p">
            <Typography
              variant="span"
              fontSize="15px"
              fontWeight="bold"
              sx={{ marginRight: "4px" }}
            >
              {name}
            </Typography>
            <Typography variant="span" color="text.secondary">
              {title}
            </Typography>
          </Typography>
          <Typography color="text.secondary">2 hours ago</Typography>
          <Button
            variant="text"
            sx={{
              textDecoration: "none",
              fontWeight: 400,
              fontSize: "0.7rem",
              padding: 0,
              textTransform: "none",
            }}
          >
            View {comments.length > 1 && "all"} {comments.length}{" "}
            {comments.length > 1 ? "comments" : "comment"}
          </Button>
        </CardContent>
        <CardComment>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap="5px"
          >
            <EmojiEmotions />
            <InputBase placeholder="Add a comment" />
          </Box>
          <Button variant="text" color="primary">
            Post
          </Button>
        </CardComment>
      </Card>
    </>
  );
};

export default Post;
