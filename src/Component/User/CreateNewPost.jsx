import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPost,
  setPostWithComment,
  getPostDetail,
  setPostStatus,
  postWithLike,
} from "../store/PostSlice";
import { v4 as uuidv4 } from "uuid";

const CreatePost = () => {
  let [inputpost, setInputPost] = useState("");
  let [postimage, setPostImage] = useState("");
  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);
  const { postdetails, poststatus } = useSelector((state) => state.post);
  let dispatch = useDispatch();

  const newPost = () => {
    var postdetail = {
      createdBy: localStorage.getItem("firstname"),
      detail: inputpost,
      created_at: new Date().toISOString(),
      image: postimage,
      userdp: localStorage.getItem("userdp"),
      id: uuidv4(),
      user_id: localStorage.getItem("id"),
      likes: [],
    };
    var url = "http://localhost:1234/posts";
    var postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postdetail),
    };
    fetch(url, postOption)
      .then((response) => response.json())
      .then((data) => {
        handleClose(true);
        setInputPost("");
        setPostImage("");
        dispatch(fetchPost(postdetails));
      });
  };

  useEffect(() => {
    dispatch(fetchPost(postdetails));
  }, []);
  return (
    <div>
      <div className="row p-4">
        <div className="col-md-2"></div>
        <div className="col-md-8 shadow rounded rounded-3 ">
          <Modal
            show={show}
            onHide={handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Create New Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Write About Your Post </Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={(e) => setInputPost(e.target.value)}
                    value={inputpost}
                    placeholder="what's in your mind?"
                    rows={3}
                  />
                </Form.Group>
                <div className="">
                  {postimage ? (
                    <div className="">
                      <img
                        src={postimage}
                        className="img-thumbnail rounded"
                        width={"70%"}
                        title="image preview"
                      />
                      <Form.Control
                        type="url"
                        value={postimage}
                        className="mt-3"
                        onChange={(e) => setPostImage(e.target.value)}
                      />
                    </div>
                  ) : (
                    <>
                      <Form.Label>Enter Your Image URL </Form.Label>
                      <Form.Control
                        type="url"
                        value={postimage}
                        className="mt-3"
                        onChange={(e) => setPostImage(e.target.value)}
                      />
                    </>
                  )}
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                disabled={inputpost == "" && postimage == ""}
                onClick={newPost}
              >
                POST
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="d-flex mt-3">
            <Link
              data-toggle="modal"
              type="button"
              className="form-control text-decoration-none"
              data-target="#exampleModalCenter"
              onClick={handleShow}
            >
              How's You Feel Today?
            </Link>

            <Button className="btn btn-primary ms-3" onClick={handleShow}>
              POST
            </Button>
          </div>

          <div className="d-flex justify-content-around  ">
            <button className=" btn  d-flex align-items-center justify-content-center my-2 w-50">
              <i className="fa-solid fa-video  text-danger  "></i>
              <h6 className="pt-1 ps-2 ">Live </h6>
            </button>

            <button className="btn  d-flex align-items-center justify-content-center my-2 w-50">
              <i className="fa-solid text-success fa-image "></i>
              <h6 className="pt-1 ps-2">Photo/Video</h6>
            </button>

            <button className="  btn  d-flex align-items-center justify-content-center my-2 w-50">
              <i className="fa-regular fa-face-smile text-warning "></i>
              <h6 className="pt-1 ps-2">Feeling</h6>
            </button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default CreatePost;
