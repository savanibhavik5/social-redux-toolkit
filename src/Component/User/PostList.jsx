import React from "react";
import { useSelector } from "react-redux";
import PostComponent from "./PostComponent";

const PostList = () => {
  const { postdetails } = useSelector((state) => state.post);

  return (
    <div className="row ">
      <div className="col-md-2"></div>
      <div className="col-md-8 ">
        {postdetails.map((post) => {
          return (
            <PostComponent
              key={post?.id}
              postid={post?.id}
              createdBy={post?.createdBy}
              detail={post?.detail}
              image={post?.image}
              userdp={post?.userdp}
              user_id={post?.user_id}
              likes={post?.likes}
              comments={post?.comments}
              created_at={post?.created_at}
            />
          );
        })}
      </div>

      <div className="col-md-2"></div>
    </div>
  );
};

export default PostList;
