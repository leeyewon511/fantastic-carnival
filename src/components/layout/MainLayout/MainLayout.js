import React from "react";
import "./MainLayout.css"
import Nav from "./Nav/NavPresenter";


const MainLayout = (props) => {
  return( 
  <>
  <Nav />
 
    <div>{props.children}</div>
  </>
)
};

export default MainLayout;
