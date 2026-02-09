import React from "react";
import "./Search.css"

const SearchPresenter=()=>{
  return(
  <div className="search">
    <div className="location">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtvrOyU_Ox6EGDWfDFJ1sPXLrk-quSdyBig&s" alt="위치아이콘" className="locationIcon"/>
    <div className="area">성남동</div>
    <img src="https://cdn-icons-png.flaticon.com/512/625/625946.png" alt="지역탐색" className="searchArea"/>
    </div>

    <div className="input">
      <div className="menubar">
      <div className="menu1">중고거래</div>
      <img src="https://images.icon-icons.com/1143/PNG/512/downarrowtriangleoutline_80722.png" alt="카테고리" className="bar"/>
      </div>
      <div className="search-input">
        <input type="text" className="searchWord" placeholder="검색어를 입력해주세요" />
        <button className="goButton">➜</button>
      </div>
    </div>
  </div>
  );
}


export default SearchPresenter;