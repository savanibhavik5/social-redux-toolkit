import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const CommentComponent = ({
  post_id,
  comment_dp,
  comment_by,
  comment_text,
  id,
  del_comment,
  edit_comment,
}) => {
 

  return (
    <div className="row">
      <div className="d-flex m-2">
        <img
          src={comment_dp}
          alt="image not found"
          width="20px"
          height="20px"
          className="rounded-circle m-1"
        />
        <div>{comment_by}:-</div>

        <div className="d-inline-flex justify-content-between w-100  pe-3">
          <div className="text-break">{comment_text}</div>
          <div className="d-flex ">
            <Link
              className="text-decoration-none text-primary mx-1 p-1 d-flex  text-end"
              onClick={edit_comment}
            >
              Edit
            </Link>
            <Link
              className="text-decoration-none text-danger p-1 mx-1 d-flex outline-non text-end"
              onClick={del_comment}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
