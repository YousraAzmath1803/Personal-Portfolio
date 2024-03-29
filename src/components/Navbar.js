import {Link}from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Navbar(){
    const[expandNavbar,setExpandNavbar] = useState(false);
    const location = useLocation();
   useEffect( () => {
    console.log("I am closing ");
    setExpandNavbar(false)
   },[location])
    return(
        <div className="navbar" id={expandNavbar? "open" : "close"}>
            <div className="toggleButton">
            <button onClick={() =>{
                setExpandNavbar((prev) => !prev);
            }}>
                <ReorderIcon>

                </ReorderIcon>
            </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>

    )
}
export default Navbar;