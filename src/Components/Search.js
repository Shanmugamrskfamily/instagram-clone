import React from "react";
import "./Search.css";
import Sidenavbar from "../Sidenavbar";

const Search = () => {
  return (
    <div className="profile ">
    <div className="row">
<div className="col-lg-2 ">
     <div className='home-navigation'>
       <Sidenavbar/>
     </div>
   </div>
   <div className="col-lg-10">
    <div className="searchOverlay">
      <div className="container">
        <h1>Search</h1>
        <input
          type="text"
          maxLength={20}
          placeholder="Type to search..."
          data-testid="search-input"
        />
        {
          <p>No search results yet.</p>
        }
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Search
