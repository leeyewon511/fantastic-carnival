import React from "react";
import "./Detail.css"

const DetailPresenter = (props) => {
  const details = props.detailedPage[0];
  return(
    <div className="details">
      <div className="content1">
        <img src={details.imgs1} className="img4"/>

       <div className="info1">
        <img src={details.profile} className="profile"/>
        <div className="info1_1">
        <p className="names">{details.names}</p>
        <p className="area">{details.area}</p>
        </div>
       </div>
      </div>

      <div className="content2">
        <h1 className="title1">{details.title}</h1>
        <div className="meta-data" >
        <p className="category">{details.category}</p>
        <p className="days1">{details.days}</p>
        </div>
        <p className="price">{details.price}원</p>
        <p className="contents">{details.contents}</p>
        <div className="reactions">
        <span className="msg">채팅{details.msg}</span>
        <span className="heart">관심{details.heart}</span>
        <span className="read">조회{details.read}</span>
        </div>
        <div className="goapp">{details.goapp}</div>
      </div>
    </div>
  )

};

export default DetailPresenter;