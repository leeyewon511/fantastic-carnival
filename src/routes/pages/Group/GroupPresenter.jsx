import React from "react";
import "./Group.css";
import { HiMiniMapPin } from "react-icons/hi2";
import { IoPerson } from "react-icons/io5";

const GroupPresenter=(props)=>{
  const groupPage=props.groupPage;

 return(
  <div className="groupPages">
  {groupPage.map((g)=>{
  return(
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
  )
  })}
  </div>
)
}


export default GroupPresenter;