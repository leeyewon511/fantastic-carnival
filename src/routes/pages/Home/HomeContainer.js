import React, { useState } from "react";
import HomePresenter from "./HomePresenter";


const HomeContainer = () => {
   const [list, setList] = useState([
    {
      id: 0,
      imgs: "https://img.kr.gcp-karroter.net/origin/article/202511/e04184f806ae9ef169f0d15ebe70e7457026ce260e628bb3c632531f243f4b79_0.webp?f=webp&q=95&s=720x720&t=inside",
      title: "휩드 디스커버리 키트",
      price: "180,000",
      area: "잠실동",
      days: "17일전",
    },
    {
      id: 1,
      imgs: "https://img.kr.gcp-karroter.net/origin/article/202602/1124b736d617d18984c1b3c441443b284132be36c0b174fe048c795dcf3fd521_0.webp?f=webp&q=95&s=720x720&t=inside",
      title: "스타벅스",
      price: "80,000",
      area: "우동",
      days: "2일전",
    },
    {
      id: 2,
      imgs: "https://i.pinimg.com/236x/e6/86/1e/e6861e0a7be7c41a968054cc1b8d32fa.jpg",
      title: "상의 티셔츠",
      price: "50,000",
      area: "송정동",
      days: "1일전",
    },
  ]);

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


  return <HomePresenter product={list} detailedPage={page} />;
}

export default HomeContainer;
