import React, { useState, useEffect } from "react";
import { fetchPost, setPostWithComment } from "../store/PostSlice";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import CommentComponent from "./CommentComponent";
import axios from "axios";

const PostComponent = ({
  image,
  createdBy,
  detail,
  userdp,
  user_id,
  likes,
  postid,
  comments,
  id,
}) => {
  let [comment, setComment] = useState("");
  const { postdetails } = useSelector((state) => state.post);
  let dispatch = useDispatch();
  let currentuserid = localStorage.getItem("id");
  const [liked, setLiked] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const commentHandle = (id) => {
    fetch(`http://localhost:1234/comments?post_id=${id}`)
      .then((res) => res.json())
      .then((setData) => {
        var comments = {
          comments: setData,
          post_id: id,
        };
        dispatch(setPostWithComment(comments));
      });
  };

  const likeHandle = (postid, likes) => {
    if (!postid) return;
    const likesbypost = likes?.findIndex((item) => item === currentuserid);
    console.log(likesbypost);
    const finaldata =
      likesbypost === -1
        ? [...likes, currentuserid]
        : likes?.filter((item) => item !== currentuserid);
    setLiked(likesbypost === -1);
    fetch(`http://localhost:1234/posts/${postid}`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify({ likes: finaldata }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchPost(postdetails));
      });
  };

  const handleEdit = (comment) => {
    setCurrentId(comment?.id);
    setComment(comment?.comment_text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request =
      currentId === null
        ? axios.post("http://localhost:1234/comments", {
            id: uuidv4(),
            post_id: postid,
            comment_text: comment,
            user_id: localStorage.getItem("id"),
            comment_dp: localStorage.getItem("userdp"),
            comment_by: localStorage.getItem("firstname"),
          })
        : axios.patch(`http://localhost:1234/comments/${currentId}`, {
            id: currentId,
            comment_text: comment,
          });
    const response = await request;
    console.log(response);
    setComment("");
    setCurrentId(null);
  };

  const delPost = (postid) => {
    var url = "http://localhost:1234/posts/" + postid;
    var delOption = {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    };
    fetch(url, delOption)
      .then((res) => res.json())
      .then((serRes) => {
        dispatch(fetchPost(postdetails));
      });
  };

  const delcomment = (id) => {
    var url = "http://localhost:1234/comments/" + id;
    var method = {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    };
    fetch(url, method)
      .then((res) => res.json())
      .then((serRes) => {
        dispatch(setPostWithComment(comments));
        dispatch(fetchPost(postdetails));
      });
    commentHandle();
  };

  return (
    <div>
      <div className="rounded rounded-3 shadow mt-3 p-2 ">
        <div className="d-flex justify-content-between p-3">
          <div className="d-flex ">
            <div className="">
              <img
                src={userdp}
                alt="image Not Found"
                width="30px"
                height="30px"
                className="rounded-circle"
              />
              <span className="ps-3">
                {createdBy}
                :-{user_id}
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="bg-primary ">
              <button
                className="btn btn-light"
                onClick={delPost.bind(this, postid)}
              >
                ×
              </button>
            </div>
          </div>
        </div>
        <div className="m-2">{detail}</div>
        <div className="text-center p-3 ">
          <img
            src={image}
            className="post_img rounded"
            style={{ width: "85%" }}
            alt="error in image loading"
          />
        </div>
        <div className="d-flex justify-content-around btn-container mt-3">
          <button
            className=" form-control post-button"
            onClick={likeHandle.bind(this, postid, likes)}
          >
            {!liked ? (
              <i className="fa-solid fa-thumbs-up "></i>
            ) : (
              <i className="fa-solid fa-thumbs-up text-primary "></i>
            )}

            <h6 className="pt-2 ps-2">{likes?.length}</h6>
          </button>
          
          <button
            className="form-control post-button"
            onClick={commentHandle.bind(this, postid)}
          >
            <i className="fa-solid fa-comments"></i>
            <h6 className="pt-2 ps-2 ">{comments?.comment_length}Comment</h6>
          </button>
        </div>
        {comments?.map((comment) => {
          return (
            <CommentComponent
              key={comment?.id}
              id={comment?.id}
              post_id={comment?.id}
              comment_text={comment?.comment_text}
              comment_by={comment?.comment_by}
              comment_dp={comment?.comment_dp}
              comment_length={comment?.comment_length}
              del_comment={delcomment.bind(this, comment?.id)}
              edit_comment={() => handleEdit(comment)}
            />
          );
        })}
        <div className="d-flex w-100 p-3">
          <img
            src={localStorage.getItem("userdp")}
            alt={`image of${localStorage.getItem("firstname")}`}
            width="20px"
            height="20px"
            className="rounded-circle"
          />
          <textarea
            cols="30"
            className="form-control mx-1"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
          <div className="d-flex align-items-end">
            {currentId === null ? (
              <button
                disabled={comment == ""}
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Add Comment
              </button>
            ) : (
              <button
                disabled={comment == ""}
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Update Comment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostComponent;
