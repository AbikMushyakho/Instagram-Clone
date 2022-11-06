import { Box, Paper, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import StoryPerson from "./StoryPerson";
import images from "../../StaticData/persons";
// import posts from "../../StaticData/postImages";
// import { getAllUser } from "../../../services/all";
// import { toast } from "react-toastify";
import { persons, posts as personPost } from "../../StaticData/users";
const Feed = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // const fetchUsers = async () => {
    //   try {
    //     const response = await getAllUser();
    //     setUsers([...response.data]);
    //   } catch (error) {
    //     console.log(error);
    //     // toast.warning()
    //   }
    // };
    // fetchUsers();

    setUsers(persons);
    setPosts(personPost);
  }, []);
  return (
    <>
      <Box
        sx={{
          width: { xl: "100%", sm: "500px" },
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            display: "flex",
            marginBottom: "2rem",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            component="ul"
            justifyContent="start"
            spacing={2}
            my={1}
            sx={{
              borderRadius: "5px",
              overflowX: "auto",
              padding:'0.5rem 0'
            }}
            // className={noScrollbarsClassName}
          >
            {users.map((user, index) => {
              return (
                <StoryPerson
                  key={user._id}
                  name={user.name}
                  image={user.image}
                />
              );
            })}
          </Stack>
        </Paper>

        <Paper elevation={2}>
          <Stack direction="column" spacing={2}>
            {posts.map((post, index) => {
              const person = persons.filter(
                (person) => post.uploaderId === person._id
              );
              const uploader = person[0];
              return (
                <Post
                  key={index}
                  name={uploader.name}
                  avatarImage={uploader.image}
                  postImage={post.image}
                  title={post.title}
                  comments={post.comments}
                  like={post.likes}

                />
              );
            })}
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default Feed;
