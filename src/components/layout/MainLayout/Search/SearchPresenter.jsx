import React from "react";
import "./Search.css"
import { ArrowRight, ChevronDown, MapPinIcon, Triangle } from "lucide-react";

const SearchPresenter=()=>{
  return(
<div className="search">
      {/* 1 */}
      <div className="location">
        <MapPinIcon size={20} strokeWidth={1.5} />
        <div className="area2">성남동</div>
        <ChevronDown size={20} strokeWidth={1.5} />
      </div>
      {/* 2 */}
      <div className="input">
        <div className="menubar">
          <div className="menu1">중고거래</div>
          <Triangle className="triangle" fill="#000000" size={8} />
        </div>
        <div className="search-input">
          <input
            type="text"
            className="searchWord"
            placeholder="검색어를 입력해주세요"
          />
          <button className="goButton"><ArrowRight size={20} strokeWidth={2} width={20} height={20}/></button>
        </div>
      </div>
    </div>
  );
}


export default SearchPresenter;