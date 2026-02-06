import React from "react";
import "./Home.css"

const HomePresenter = (props) => {
  const box1 = props.product[0];
  const box2 = props.product[1];
  const box3 = props.product[2];
  const details = props.detailedPage[0];

  return (
    <div>
    <div className="Box">
      <article className="Box1" >
        <img src={box1.imgs} className="img1" />
        <p className="title">{box1.title}</p>
        <p className="price">{box1.price}</p>
        <div className="info" >
        <p className="area">{box1.area}</p>
        <p className="days">{box1.days}</p> 
        </div>
      </article>

      <article className="Box2"> 
        <img src={box2.imgs} className="img2" />
        <p className="title">{box2.title}</p>
        <p className="price">{box2.price}</p>
        <div className="info">
        <p className="area">{box2.area}</p>
        <p className="days">{box2.days}</p>
        </div>
      </article>

      <article className="Box3"> 
        <img src={box3.imgs} className="img3" />
        <p className="title">{box3.title}</p>
        <p className="price">{box3.price}</p>
        <div className="info">
        <p className="area">{box3.area}</p>
        <p className="days">{box3.days}</p>
        </div>
      </article>
    </div>

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
        <h2 className="meta-data" >
        <p className="category">{details.category}</p>
        <p className="days1">{details.days}</p>
        </h2>
        <h3 className="price">{details.price}원</h3>
        <p className="contents">{details.contents}</p>
        <div className="reactions">
        <span className="msg">채팅{details.msg}</span>
        <span className="heart">관심{details.heart}</span>
        <span className="read">조회{details.read}</span>
        </div>
        <div className="goapp">{details.goapp}</div>
      </div>
    </div>
    </div>
  );
};


export default HomePresenter;
