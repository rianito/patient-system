import React, { MouseEvent } from 'react';
import './style.css'

export default function SideBar(){
    
    
        const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          alert(103)
        };
      
return(
<>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
    <nav>
        <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" id="mySidebar">
            <button className="w3-bar-item w3-button w3-large" onClick={handleMouseEvent} >Close &times;</button>
            <a href="#" className="w3-bar-item w3-button">Link 1</a>
            <a href="#" className="w3-bar-item w3-button">Link 2</a>
            <a href="#" className="w3-bar-item w3-button">Link 3</a>
        </div>
    </nav>
</>
)
}