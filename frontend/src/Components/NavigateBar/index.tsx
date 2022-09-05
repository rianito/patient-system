import React, { MouseEvent } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './style.css'

export default function SideBar(){

      
return(
<>
    <nav>
        <div className="topnav">
                <Link to="/">Home</Link>
                <Link to="/listing">Listing</Link>
        </div>
    </nav>
</>
)
}