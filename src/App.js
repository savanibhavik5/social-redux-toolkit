import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/User/Home";
import Header from "./Component/User/Header";
// import Comment from "./Component/User/Comment";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/comment" element={<Comment />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
