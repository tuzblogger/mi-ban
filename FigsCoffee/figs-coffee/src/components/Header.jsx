import logo from "./images/logo.png"
import heart from "./images/heart_icon.png"
import box from "./images/box_icon.png"
import man from "./images/man_icon.png"
import search from "./images/search_icon.png"
import { useEffect, useState } from "react";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {

    return (
        <header>
            <div> 
                <img src={logo} alt="" id="logo-menu"/>
            </div>

            <div id="vectors">
                <button>About us</button>
                <button>Our Products</button>
                <button>Delivery</button>
                <div id="search">
                    <img src={search} alt="" id="search_icon"/>
                    <input type="text" placeholder="Search"/>

                </div>
                <button>
                    <img src={heart} alt="" />
                </button>
                <button>
                    <img src={box} alt="" />
                </button>
                <button>
                    <img src={man} alt="" />
                </button>
            </div>
            
        </header>
    )
}