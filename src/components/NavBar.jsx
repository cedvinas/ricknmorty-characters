import React from "react";
import '../styles/navbar.scss'
import NavLink from "./NavLink";



export default function Navbar() {


    return (
        <nav>
            <ul>
                <NavLink url='/' text='Home' />
                <NavLink url='/list' text='List' />
            </ul>

        </nav>
    );
}