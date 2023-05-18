// import React, { useEffect } from "react";
// import {
//   fetchPost,
//   STATUSES,
//   setPostWithComment,
//   postWithLike,
// } from "../store/PostSlice";
// import { v4 as uuidv4 } from "uuid";
// import { useSelector, useDispatch } from "react-redux";
// import Post from "./Posts_Comment";

// const Posts = () => {
//   const dispatch = useDispatch();

//   const { postdetails, poststatus } = useSelector((state) => state.post);

//   useEffect(() => {
//     // dispatch(fetchPost(postdetails));
//     dispatch(setPostWithComment(postdetails));
//     // dispatch(postWithLike(postdetails));
//   }, []);

//   return (
//     <div>
//       {postdetails.map(({ id, post }) => (
//         <Post
//           key={id}
//           id={uuidv4()}
//           createdBy={post?.createdBy}
//           detail={post?.detail}
//           image={post?.image}
//           userdp={post?.userdp}
//           user_id={post?.user_id}
//           likes={post?.likes}
//         />
//       ))}
//     </div>
//   );
// };

// export default Posts;
