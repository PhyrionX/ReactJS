import React from "react";

export const Header = (props) =>{
     return(
         <nav className="navBar navbar-default">
             <div className="container">
                 <div className="navbar-header">
                     <div className="nav navbar-nav">
                         <li><a href="#">{props.homeLink}</a></li>
                     </div>
                 </div>
             </div>
         </nav>
     );
}