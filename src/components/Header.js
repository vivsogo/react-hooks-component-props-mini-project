import React from "react";

//add child component 
//adding props to grab element from data 
function Header(props) {
  return (
    <header>
     <h1>{props.name} </h1>
  </header>
  );
}

export default Header;
