// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchPost,
//   STATUSES,
//   setPostWithComment,
//   postWithLike,
// } from "../store/PostSlice";
// import { v4 as uuidv4 } from "uuid";

// const Comment_ex = (props) => {
//   let [handlecommentlist, setHandleCommentList] = useState(false);
//   let [comment, setComment] = useState("");

//   const giveLike = (id) => {
//     // var likes = ["likes"];

//     var newLike = {
//       user_id: localStorage.getItem("id"),
//     };
//     var postoption = {
//       headers: { "Content-Type": "application/json" },
//       method: "POST",
//       body: JSON.stringify(newLike),
//     };
//     var url = `http://localhost:1234/posts`;

//     fetch(url, postoption)
//       .then((res) => res.json())
//       .then((serRes) => {});
//     console.log();
//   };

//   const postComment = (postinfo) => {
//     var comments = {
//       id: uuidv4(),
//       post_id: postinfo.id,
//       comment_text: comment,
//       comment_dp: localStorage.getItem("userdp"),
//       comment_by: localStorage.getItem("firstname"),
//     };
//     var url = "http://localhost:1234/comments";
//     var postoption = {
//       headers: { "Content-Type": "application/json" },
//       method: "POST",
//       body: JSON.stringify(comments),
//     };
//     fetch(url, postoption)
//       .then((res) => res.json())
//       .then((serRes) => {
//         setComment("");
//         setHandleCommentList(true);
//       });
//   };

//   const dispatch = useDispatch();
//   const { postdetails, poststatus } = useSelector((state) => state.post);

//   const handleCommentButton = (id) => {
//     fetch(`http://localhost:1234/comments?post_id=${id}`)
//       .then((res) => res.json())
//       .then((setData) => {
//         var allcomment = {
//           allcomment: setData,
//           post_id: id,
//         };
//         dispatch(setPostWithComment(allcomment));
//         setHandleCommentList(true);
//       });
//   };

//   useEffect(() => {
//     // dispatch(fetchPost(postdetails));
//     dispatch(setPostWithComment(postdetails));
//     // dispatch(postWithLike(postdetails));
//     // getLike();
//   }, []);

//   if (poststatus === STATUSES.LOADING) {
//     return (
//       <div className="text-center">
//         <h2>Loading....</h2>
//       </div>
//     );
//   }
//   if (poststatus === STATUSES.ERROR) {
//     return (
//       <div className="text-center">
//         <h2>Something went to wrong</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="row">
//       <div className="col-md-8 offset-md-2 p-4">
//         {postdetails.length === 0 ? (
//           <h1 className="text-center pt-5">No Post Yet</h1>
//         ) : (
//           postdetails.map((postinfo) => {
//             return (
//               <div
//                 key={postinfo.id}
//                 className="rounded rounded-3 shadow mt-1 p-3 "
//               >
//                 <div className="d-flex justify-content-around btn-container   mt-3">
//                   <button
//                     className="d-flex form-control align-items-center mx-2 justify-content-center  post-button"
//                     onClick={giveLike.bind(this, postinfo.id)}
//                     disabled={true}
//                   >
//                     <div>
//                       <i className="fa-solid fa-thumbs-up"></i>
//                       {postinfo?.likes?.length} Likes
//                     </div>
//                   </button>
//                   <button
//                     className="align-items-center justify-content-center mx-2 d-flex form-control  post-button "
//                     onClick={handleCommentButton.bind(this, postinfo?.id)}
//                   >
//                     <i className="fa-solid fa-comments"></i>
//                     <h6 className="pt-2 ps-2 ">
//                       {postinfo?.comments?.length}
//                       -Comment
//                     </h6>
//                   </button>
//                 </div>
//                 <hr />

//                 {postinfo?.comments?.map((comments, index) => {
//                   return (
//                     <div key={index} className="d-flex">
//                       <div>
//                         <img
//                           src={comments?.comment_dp}
//                           alt="image not found"
//                           width="20px"
//                           height="20px"
//                           className="rounded-circle m-1"
//                         />
//                       </div>
//                       <div>{comments?.comment_by}:-</div>
//                       <div className="text-break">{comments?.comment_text}</div>
//                     </div>
//                   );
//                 })}
//                 <div className="d-flex w-100 ">
//                   <img
//                     src={localStorage.getItem("userdp")}
//                     alt="dp not found"
//                     width="25px"
//                     height="25px"
//                     className="rounded-circle"
//                   />
//                   <div className="ps-2">
//                     <textarea
//                       cols={570}
//                       onChange={(e) => setComment(e.target.value)}
//                       value={comment}
//                       className="form-control "
//                       placeholder="Write A Comment..."
//                     ></textarea>
//                   </div>

//                   <div className="d-flex align-items-end ">
//                     <button
//                       className="btn border border-0"
//                       disabled={comment === ""}
//                       onClick={postComment.bind(this, postinfo)}
//                     >
//                       <i className="fa-brands fa-telegram fa-2x "></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//       <div className="col-md-2"></div>
//     </div>
//   );
// };

// export default Comment_ex;
