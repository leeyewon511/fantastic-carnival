import React from "react";
import "./Group.css";
import { HiMiniMapPin } from "react-icons/hi2";
import { IoPerson } from "react-icons/io5";

const GroupPresenter=(props)=>{
  const groupPage=props.groupPage;

 return(
  <div className="groupPages">
    <div className="group-container">
      <span className="category-path"><a href="/">홈</a> {">"} 모임</span>
      <h2 className="location-info">부산광역시 기장군 정관읍 모임</h2>
    </div>
  {groupPage.map((g)=>{
  return(
    <a href="/Item">
    <div className="groupPage">
      <img src={g.groupImg} alt={g.groupTitle} className="groupImg"/>

      <div className="post">
      <div className="groupTitle">{g.groupTitle}</div>
      <div className="groupContent">{g.groupContent}</div>

      <div className="meta">
      <div className="groupArea">
      <HiMiniMapPin size={16} className="areaIcon" />
      <span>{g.groupArea}</span>
      </div>
      <div className="groupinfo">
      <IoPerson size={14} className="infoIcon"/>
      <span>{g.groupHits} · {g.groupCategory}</span>
      </div>
      </div>

      </div>
    </div>
    </a>
  )
  })}
  </div>
)
}


export default GroupPresenter;