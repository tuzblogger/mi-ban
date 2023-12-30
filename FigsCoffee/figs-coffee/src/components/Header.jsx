import logo from "./images/logo.png"
import { useEffect, useState } from "react";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {

    return (
        <header>
            <img src={logo} alt="" id="logo-menu"/>
            <button>About us</button>
            <button>Our Products</button>
            <button>Delivery</button>
            <div>
                <img src="" alt="" />
                <input type="text" />
            </div>
            <button>
                <img src="" alt="" />
            </button>
            <button>
                <img src="" alt="" />
            </button>
            <button>
                <img src="" alt="" />
            </button>

            
        </header>
    )
}