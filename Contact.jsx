import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export default function Contact(){
    return(
    <div>
        <h2>Welcome to Contacts</h2>
        <button><Link to="contactus">Call or mail us</Link></button>
        <button><Link to ="address">Drop a message</Link></button>    
       <Outlet/>
    </div>
    )
}