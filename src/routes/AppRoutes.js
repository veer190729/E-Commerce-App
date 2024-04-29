import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { AboutUs } from "../pages/about/AboutUs";
import { Contact } from '../pages/contact/Contact';
import { SignUp } from '../pages/signup/SignUp';
import { Login } from '../pages/login/Login';
import Wishlist from '../pages/wishlist/Wishlist';

const AppRoutes = () => {
    return (
       
            <Routes>
                <Route path="/" Component={Home} ></Route>
                <Route path='/contact' Component={Contact} ></Route>
                <Route path="/aboutus" Component={AboutUs} ></Route>
                <Route path="/signup" Component={SignUp} ></Route>
                <Route path="/login" Component={Login} ></Route>
                <Route path="/wishlist" Component={Wishlist} ></Route>
            </Routes>
     
    )
}

export default AppRoutes;