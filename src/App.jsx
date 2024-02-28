import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Add this import
import './index.css';
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import LoginPage from "./pages/loginPage";
import Register from "./pages/register";
import Registerpage from "./pages/Registerpage";
import sidebarLayout from "./pages/sideBarLayout";
import UserDashboard from "./pages/userDashboard";
import searchPage from "./pages/searchPage";
import schedulePage from "./pages/schedulePage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/fill' element={<Registerpage />} />
          {/* 
          <Route path="/user" element={<sidebarLayout />}>
            <Route path="/search" element={<searchPage />} />
            <Route path="/schedule" element={<schedulePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/helpCenter" element={<HelpCenter />} />
          </Route> */}
        </Routes>
      </BrowserRouter>

    </>

  );
}


export default App
