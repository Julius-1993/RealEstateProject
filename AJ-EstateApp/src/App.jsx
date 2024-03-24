import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from "./Screens/About";
import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Header from "./component/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}
