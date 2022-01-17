// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
// import { Login } from "./components/Login";
import { Adminlogin } from "./components/AdminLogin";
import { Adminhome } from "./components/AdminHome";
import { Home } from "./components/Home";
import { PrivateRoute } from "./components/privateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/admin/login"} element={<Adminlogin />}></Route>
        <Route path={"*"} element={<h1>404 Page Not Found</h1>}></Route>
        <Route
          path={"/admin/home"}
          element={
            <PrivateRoute>
              <Adminhome />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
