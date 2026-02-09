import React from "react";
import "./Home.css"

const HomePresenter = (props) => {
const box1 = props.product[0];
  // const box2 = props.product[1];
  // const box3 = props.product[2];
  const box = props.product;
  

  return (
    <div className="Box">
      <a href="/Detail">
      <article className="Box1" >
        <img src={box1.imgs} className="img1" />
        <p className="title">{box1.title}</p>
        <p className="price1">{box1.price}</p>
        <div className="info" >
        <p className="area">{box1.area}</p>
        <p className="days">{box1.days}</p> 
        </div>
      </article>
      </a>

      {box.map((v)=>{
        return(
          <article className="Box3"> 
        <img src={v.imgs} className="img3" />
        <p className="title">{v.title}</p>
        <p className="price1">{v.price}</p>
        <div className="info">
        <p className="area">{v.area}</p>
        <p className="days">{v.days}</p>
        </div>
      </article>
        )
      })}

     
      {/* {/* <article className="Box2"> 
        <img src={box2.imgs} className="img2" />
        <p className="title">{box2.title}</p>
        <p className="price1">{box2.price}</p>
        <div className="info">
        <p className="area">{box2.area}</p>
        <p className="days">{box2.days}</p>
        </div>
      </article>

      <article className="Box3"> 
        <img src={box3.imgs} className="img3" />
        <p className="title">{box3.title}</p>
        <p className="price1">{box3.price}</p>
        <div className="info">
        <p className="area">{box3.area}</p>
        <p className="days">{box3.days}</p>
        </div>
      </article> */}
      
    </div>

  );
};


export default HomePresenter;
