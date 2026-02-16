import React, { useState } from "react";
import DetailPresenter from "./DetailPresenter";


const DetailContainer = () =>{

    const [page, setPage]=useState([{
      imgs1: "https://img.kr.gcp-karroter.net/origin/article/202511/e04184f806ae9ef169f0d15ebe70e7457026ce260e628bb3c632531f243f4b79_0.webp?f=webp&q=95&s=720x720&t=inside",
      profile: "https://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
      names: "녹차굿",
      area: "서울시 송파구 잠실동",   
      title:"휩드 디스커버리 키트",
      category:"생활가전",
      days:"10일전",
      price:"180,000",
      contents:"새제품으로 드립니다.세인트스코트 블랙 토트백과 미니백 세트입니다. 가볍고 실용적인 디자인으로 데일리백으로 좋아요. 미니백은 탈부착 가능합니다. 깔끔한 디자인이라 데일리로 들기 좋아요 ",
      msg:1,
      heart:4,
      read:86,
      goapp:"당근 앱에서 보기"
    }]);
    
  return(<DetailPresenter detailedPage={page} />);
};

export default DetailContainer;