import React from "react";
import CreatePost from "./CreateNewPost";
import PostList from "./PostList";
const Home = () => {
  return (
    <div className="text-center mb-4">
      <h1 className="">Wel-Come </h1>
      <CreatePost />
      <PostList />
    </div>
  );
};

export default Home;
