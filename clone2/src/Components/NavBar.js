import React from 'react';

function NavBar(){
    function myFunction() {
        var x = document.getElementById("myTopnav");
        console.log("Fired")
        if (x && x.className === "topnav") {
            x.className += " responsive";
        } else if (x) {
            x.className = "topnav";
        }
    }
    return (
        <div className="topnav" id="myTopnav">
        <div> <h1 className="logo">Start Bootstrap</h1> </div>
        <div>
            <a href="#home" class="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" className="icon" onclick={()=>{}}>&#9776;</a>
        </div>
        </div>
    )
}

export default NavBar;
