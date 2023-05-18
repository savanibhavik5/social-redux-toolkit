import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
    window.location.href = "/login";
  };
  return (
    <div className="container-fluid  ">
      <div className="row text-white nav-position">
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <div className=" ">
            <Link to="/" className="">
              <img
                src="https://www.keylogic.com/wp-content/uploads/2021/07/KeyLogic20Logo_official-1.svg"
                alt="logic Logo"
                className=" "
                style={{ height: "25px", width: "50" }}
              />
            </Link>
          </div>
        </div>
        <div className="col-md-6 ">
          <ul className="d-flex h-100 justify-content-around align-items-center list-styled-none">
            <li className="">
              <Link to="/">
                <h4>
                  <i className="fa fa-home "></i>
                </h4>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <h4 className="" onClick={logOut}>
                  <i className="fa fa-user ps-3 pe-3"></i>
                  {localStorage.getItem("firstname")}-LogOut
                </h4>
              </Link>
            </li>

            {/* <li>
              <Link to="/comment">
                <h4>
                  <i className="fa-solid fa-film "></i>
                </h4>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
