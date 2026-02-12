import React from "react";
import "./Nav.css"
import { Group } from "lucide-react";

const NavPresenter = () => {
  
  return (
<div>
   <div className="nav-container">
      <img src="https://cdn.imweb.me/upload/S20240321777a8dac08b8f/7e73947b8e401.png" alt="당근마켓로고" className="carrotlogo"/>
      <div className="menu">
      <p>중고거래</p>
      <p>부동산</p>
      <p>중고차</p>
      <p>알바/과외/레슨</p>
      <p>동네업체</p>
      <p>동네생활</p>
      <a href="/Group" className="groupButton">모임</a>
      </div>
   
      <button className="appDownload">앱 다운로드</button>
      
  </div>
</div>
      
  );
};

export default NavPresenter;