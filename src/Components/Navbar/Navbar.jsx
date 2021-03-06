import React from "react";
import "./Navbar.css";
import NavbarSearchItems from "../NavbarSearchItems/NavbarSearchItems";
import ExploreSearch from "../ExploreSearch/ExploreSearch";
import { Link } from "react-router-dom";
// import Routes from '../Routes/Routes';
function Navbar() {
  return (
    <div>
      <div className="wrapper">
        <div className="first-box">
          <NavbarSearchItems />
        </div>
        <div className="second-box">
          <div style={{ height: "20px" }}></div>
        </div>
        
      
        <Link to="/flight"><div className="second-box-end-search"
          
          // style={{ color: "white", textDecorationLine: "none" }}
        >SEARCH </div></Link>
       
        <p className="second-box-end-search-p"> Explore More</p>
        <div className="explore-more-search">
          <ExploreSearch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
