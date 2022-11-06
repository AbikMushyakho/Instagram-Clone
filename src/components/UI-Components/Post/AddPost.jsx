import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  postNewFileContext,
  themeContext,
  userContext,
} from "../../../Contexts/Context";

const AddPost = ({ addPostDialogOpen, setAddPostDialogOpen }) => {
  const { user, setUser } = useContext(userContext);
  const { mode } = useContext(themeContext);
  const { file, setFile } = useContext(postNewFileContext);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    file !== null && setPreview(URL.createObjectURL(file));
  }, [file]);
  const handleClose = (e) => setAddPostDialogOpen(false);
  const [caption, setCaption] = useState("");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const handleConfirmationClose = () => {
    setOpen(false);
  };
  const handleNewPost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", caption);
    // formData.append('uploaderId', user)

    console.log({
      user: user,
      caption: caption,
      file: file,
    });
    setFile(null);
    setPreview(null);
    setAddPostDialogOpen(false);
    toast.success("New post uploaded!");
  };
  return (
    <>
      <Dialog
        open={addPostDialogOpen}
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {preview === null ? (
          <>
            <DialogTitle
              id="scroll-dialog-title"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              Create new post
            </DialogTitle>
            <Divider />
            <DialogContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                gap: "30px",
                height: "65vh",
              }}
            >
              <svg
                aria-label="Icon to represent media such as images or videos"
                color={mode === "dark" ? "#fafafa" : "#262626"}
                fill={mode === "dark" ? "#fafafa" : "#262626"}
                height="77"
                role="img"
                viewBox="0 0 97.6 77.3"
                width="96"
              >
                <path
                  d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                  fill="currentColor"
                ></path>
                <path
                  d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                  fill="currentColor"
                ></path>
                <path
                  d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                  fill="currentColor"
                ></path>
              </svg>
              <DialogContentText variant="h4" fontWeight={300}>
                Drag Photos and Videos here
              </DialogContentText>
              <Button variant="contained" component="label">
                Select from computer
                <input
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    setFile(selectedFile);
                    const objectUrl = URL.createObjectURL(selectedFile);
                    setPreview(objectUrl);
                  }}
                  multiple
                  type="file"
                />
              </Button>
            </DialogContent>
          </>
        ) : (
          <>
            <DialogTitle
              id="scroll-dialog-title"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <IconButton onClick={(e) => setConfirmationDialogOpen(true)}>
                <svg
                  aria-label="Back"
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
                    x1="2.909"
                    x2="22.001"
                    y1="12.004"
                    y2="12.004"
                  ></line>
                  <polyline
                    fill="none"
                    points="9.276 4.726 2.001 12.004 9.276 19.274"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></polyline>
                </svg>
              </IconButton>
              <Typography>Create new post</Typography>
              <Button
                variant="text"
                onClick={handleNewPost}
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                Share
              </Button>
            </DialogTitle>
            <Divider />
            <DialogContent
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "1rem",
                height: "65vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 4,
                  width: { xs: "100%", sm: "30rem" },
                  height: { xs: "20rem", sm: "20rem" },
                }}
              >
                <img src={preview} width="100%" height="100%" />
              </Box>
              <Divider
                orientation="vertical"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "1rem",
                  flex: 2.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                  }}
                >
                  <Avatar src="" sx={{ width: "2rem", height: "2rem" }} />
                  <Typography variant="span">misst_vlog</Typography>
                </Box>
                {/* <Box sx={{width:'100%'}}> */}
                <TextField
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Write a caption"
                  multiline
                  variant="standard"
                  rows={4}
                  sx={{ width: "100%" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    width: "100%",
                  }}
                >
                  <Button
                    variant="text"
                    onClick={handleNewPost}
                    sx={{
                      display: { xs: "block", sm: "none" },
                    }}
                  >
                    Share
                  </Button>
                </Box>

                {/* </Box> */}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* conformation dialog */}
      <Dialog
        // fullScreen={fullScreen}
        open={confirmationDialogOpen}
        onClose={handleConfirmationClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          textAlign: "center",
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          {"Discard Post?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText fontWeight={200}>
            If you leave, your edits won't be saved.
          </DialogContentText>
        </DialogContent>

        <Box component="span" sx={{ display: "flex", flexDirection: "column" }}>
          <Divider />
          <Button
            autoFocus
            sx={{ color: "red", width: "100%", padding: "0.8rem" }}
            onClick={(e) => {
              setFile(null);
              setPreview(null);
              setConfirmationDialogOpen(false);
              setAddPostDialogOpen(false);
            }}
          >
            Discard
          </Button>
          <Divider />

          <Button
            autoFocus
            sx={{ width: "100%", padding: "0.8rem" }}
            onClick={(e) => setConfirmationDialogOpen(false)}
          >
            Cancel
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default AddPost;
