import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
