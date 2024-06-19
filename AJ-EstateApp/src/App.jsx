import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Screens/About";
import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Header from "./component/Header";
import Profile from "./Screens/Profile";
import PrivateRoute from "./component/PrivateRoute";
import CreateListing from "./Screens/CreateListing";
import UpdateListing from "./Screens/UpdateListing";
import Listing from "./Screens/Listing";
import Search from "./Screens/Search";
import Footer from "./component/Footer";
import FAQ from "./component/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
