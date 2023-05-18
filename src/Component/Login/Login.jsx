import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
// import { getUserDetail } from "../store/UserSlice";

const Login = () => {
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);
  let [show, setShow] = useState(false);
  let [users, setUsers] = useState([]);
  let [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password: "",
    gender: "",
    dob: "",
    id: uuidv4(),
  });
  let [msg, setMsg] = useState("");
  // let dispatch = useDispatch();
  const inputhandlers = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // const userdetails = useSelector((state) => state.userdetails);
  const userLogin = (e) => {
    e.preventDefault();
    if (input.email === "" || input.password === "") {
      setMsg("Please Enter Your Detail Properly");
    } else {
      fetch(
        "http://localhost:1234/user?email=" +
          input.email +
          "&password=" +
          input.password
      )
        .then((res) => res.json())
        .then((userinfo) => {
          if (userinfo.length === 0) {
            setMsg("Email Not Found In Our Database Please Register First");
          } else {
            setMsg("Please Wait Redirecting To Your Account");
            localStorage.setItem("firstname", userinfo[0].fname);
            localStorage.setItem("email", userinfo[0].email);
            localStorage.setItem("lastname", userinfo[0].lname);
            localStorage.setItem("userdp", userinfo[0].userdp);
            localStorage.setItem("id", userinfo[0].id);
            window.location.href = "/";
            // window.location.reload();
          }
          // dispatch(getUserDetail(userinfo));
          console.log(userinfo);
        });
    }
  };

  const signup = () => {
    var userdata = {
      fname: input.fname,
      lname: input.lname,
      email: input.email,
      password: input.password,
      gender: input.gender,
      dob: input.dob,
      dp: "",
    };
    var url = "http://localhost:1234/user";
    var postoption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch(url, postoption)
      .then((response) => response.json())
      .then((serRes) => {
        setUsers(serRes);
        handleClose(true);
        setMsg(input.fname + " Your Account Created Successfully, Login Now ");
      });
  };

  return (
    <div className="container-fluid ">
      <div className="row login_row">
        {/* <div className="text-center text-success"><h4>{msg}</h4></div> */}
        <div className="col-md-5">
          <img
            src="https:www.keylogic.com/wp-content/uploads/2021/07/KeyLogic20Logo_official-1.svg"
            alt="logic Logo"
            // style={{ width: "100%" }}
          />
          <h1>Connect with friends and the world around you on keylogic.</h1>
        </div>
        <div className="col-md-5 offset-md-1 ">
          <Form className="bg-white rounded p-md-5 p-2 rounded-4 shadow-lg">
            <h2 className="text-success text-center">
              Enter Your Login Detail
            </h2>
            <h5 className="text-center text-danger">{msg}</h5>
            <div className="pt-2">
              <label htmlFor="email" className="pt-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={input.email}
                className="form-control"
                onChange={inputhandlers}
              />
              <label htmlFor="password" className="pt-3">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={input.password}
                onChange={inputhandlers}
              />
              <div className="text-center pt-3">
                <button
                  className="btn btn-success form-control"
                  onClick={userLogin}
                >
                  Login
                </button>
              </div>
              <div className="text-center p-3">
                <Link className="">Forgotten Password</Link>
              </div>
              <hr />
            </div>
            <div className="text-center">
              <Button className="btn btn-primary ms-3" onClick={handleShow}>
                Create New Account
              </Button>
            </div>
          </Form>

          <Modal
            show={show}
            onHide={handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <h2>Sign Up</h2>
                <h6>It's Quick And Easy</h6>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="fname"
                    value={input.fname}
                    onChange={inputhandlers}
                    className="form-control m-1"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="lname"
                    value={input.lname}
                    className="form-control m-1"
                    placeholder="Last Name"
                    onChange={inputhandlers}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control m-1"
                    onChange={inputhandlers}
                    placeholder="Mobile No OR email address"
                    value={input.email}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="password"
                    name="password"
                    onChange={inputhandlers}
                    className="form-control m-1"
                    placeholder="Password"
                    value={input.password}
                  />
                </div>

                <div className="col-md-12 m-1">
                  <label htmlFor="dob">Date Of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    className="form-control "
                    onChange={inputhandlers}
                    value={input.dob}
                  />
                </div>
                <div className="row m-1 d-flex justify-content-around align-items-center">
                  <div className="col-md-6 d-flex justify-content-around align-items-center border  rounded p-2">
                    <label htmlFor="male" className="ms-5">
                      Male
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      id="male"
                      onChange={inputhandlers}
                      className="form-check p-3 me-5"
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-between align-items-center border rounded p-2">
                    <label htmlFor="female" className="ms-5">
                      female
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={inputhandlers}
                      id="female"
                      className="form-check p-3 me-5"
                    />
                  </div>
                </div>
              </Form>
              <div className="terms">
                People who use our service may have uploaded your contact
                information to keylogic. Learn more.
                <br />
                <br />
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </div>
              <div className="text-center m-3">
                <button className="btn btn-success ps-3 pe-3 " onClick={signup}>
                  Sign Up
                </button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Login;
