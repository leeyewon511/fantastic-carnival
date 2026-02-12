import React from "react";
import "./Group.css";

const GroupPresenter=()=>{
  return(
    <div className="pages">
      <div className="Gropmain">모임페이지</div>
      <a href="/Item" className="goItem">상세페이지 바로가기</a>
    </div>
  )
}

export default GroupPresenter;