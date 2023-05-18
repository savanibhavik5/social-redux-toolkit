// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchPost,
//   STATUSES,
//   setPostWithComment,
// //   postWithLike,
// } from "../store/PostSlice";

// const Comment = (comment_dp, post_id, comment_by, comment_text) => {
//   let [handlecommentlist, setHandleCommentList] = useState(false);

//   const dispatch = useDispatch();

//   const { postdetails, poststatus } = useSelector((state) => state.post);

//   // const handleCommentButton = () => {
//   //   setHandleCommentList(!handlecommentlist);
//   // };
//   useEffect(() => {
//     // dispatch(fetchPost(postdetails));
//     // dispatch(setPostWithComment(postdetails));
//     // dispatch(postWithLike(postdetails));
//   }, []);
//   // let [color, setcolor] = useState("green");
//   // if (color == "red") {
//   //   setcolor("green");
//   // } else {
//   //   setcolor("red");
//   // }
//   return (
//     <div className="container">
 
//       <div className="row">
//         <div className="d-flex justify-content-around btn-container  mt-3">
//           <button className="  form-control  post-button">
//             <i className="fa-solid fa-thumbs-up "></i>
//             <h6 className="pt-2 ps-2">Like</h6>
//           </button>
//           <button
//             className="form-control  post-button"
//             onClick={handleCommentButton}
//           >
//             <i className="fa-solid fa-comments"></i>
//             <h6 className="pt-2 ps-2 ">-Comment</h6>
//           </button>
//         </div>
//         <hr className="" />

//         <div className="d-flex w-100 px-3">
//           <img
//             src={localStorage.getItem("userdp")}
//             alt="dp not found"
//             width="20px"
//             height="20px"
//             className="rounded-circle"
//           />
//           <textarea
//             name=""
//             id=""
//             cols="30"
//             rows=""
//             className="form-control mx-1"
//           ></textarea>
//           <div className="d-flex align-items-end">
//             <button className="btn p-0 ">
//               <i className="fa-brands fa-telegram fa-2x text-danger"></i>
//             </button>
//           </div>
//         </div>
//         {postdetails?.comments?.map((comment, index) => {
//           return (
//             <div className="col-md-8 p-2" key={index}>
//               <div className="d-flex">
//                 <img
//                   src={comment?.comment_dp}
//                   alt="Image Not Found"
//                   className="rounded rounded-3"
//                   height="25"
//                   width="25"
//                 />
//                 <div className="px-2">{comment?.comment_by}</div>
//               {/* <button>{color}</button> */}
//                 <div className="px-2 text-break">{comment?.comment_text}</div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Comment;
