import React, { useState } from "react";
import ItemPresenter from "./ItemPresenter";

const ItemContainer = () =>{

  const [itemDetails,setItemDetails] = useState(
    {
      itemImg:"https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232013874893295828992&q=82&s=300x300&t=crop&f=webp",
      itemTitle:"💖우리들:같이의가치💖WA.FAM",
      itemMember:"멤버 69",
      itemPost:"게시글 1238",
      itemContent:`✨️한글명:우리들 
✨️영문명:We Are Family (WA.FAM)

⏩️모임소개 
우리들:같이의가치

💞우리들💞은 정관/기장·일광/양산시/울산시 인근 지역에 거주하는 동네 친구들이 모여 일상의 소소한 즐거움과 情을 나누는 친목 모임입니다.

우리들 맴버들은 편하게 맛집탐방, 가벼운 술자리, 골프, 산책, 여행, 취미 활동 등 다양한 이벤트를 지속적으로 해오고 있습니다.

💞우리들💞에서 웃음이 넘치는 대화와 다양하고 즐거운 활동 속에서 새로운 친구도 만나고, 설레는 인연도 찾아보시기 바랍니다. 

▶️가입조건 : 71년생~ 88년생가능`,
      itemArea:"부산 기장군 정관음",
      itemFriend:"동네친구",
      itemAge:"40~56세"
    }

  
  )
  const [album] = useState([
    {
      albumImg:"https://img.kr.gcp-karroter.net/community/community/20260217/4ad095c5-92a8-4e1b-a87e-7ef8c7c49b2c.jpeg?q=82&s=300x300&t=crop&f=webp"
    },
    {
      albumImg:"https://img.kr.gcp-karroter.net/community/community/20260216/d3db726e-6f33-43be-ad09-db7e645d4851.jpeg?q=82&s=300x300&t=crop&f=webp"
    },
    {
      albumImg:"https://img.kr.gcp-karroter.net/community/community/20260211/3fc1714e-fedb-404e-aef8-aa9e64c788b5.jpeg?q=82&s=300x300&t=crop&f=webp"
    },
    {
      albumImg:"https://img.kr.gcp-karroter.net/community/community/20260216/123932f9-dd2f-48d8-ae6f-099075fef04a.jpeg?q=82&s=300x300&t=crop&f=webp"
    }
  ])


  const [member] = useState([
    {
      profile:"https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg?semt=ais_user_personalization&w=740&q=80",
      nickname:"프로빵(76/장안/남)",
      location:"부간 기장군 장안읍",
      description:"우리들 모임장 프로빵입니다. 에너지 넘치고. ...",
    },
    {
      profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVxAYG3QFWp-u4Z6s71Ir9f4C9Kutfe0Jjw&s",
      nickname:"화니/79/일광/남/부반장",
      location:"부산 기장군 정관읍",
      description:"",
    },
     {
      profile:"https://flexible.img.hani.co.kr/flexible/normal/590/590/imgdb/resize/2007/1227/68227042_20071227.jpg",
      nickname:"응응(82/양산지역장/남)",
      location:"경남 김해시 구산동",
      description:"안녕하세요! 잘 부탁드립니다.",
    },
     {
      profile:"https://mblogthumb-phinf.pstatic.net/20120615_30/snaps1_1339721440666NgJXG_JPEG/%BA%B0%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD%B9%E3%BE%DF%B0%E6%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD.jpg?type=w420",
      nickname:"아이비(72/여/정관)",
      location:"부산 기장군 정관읍",
      description:"반갑습니다.",
    }
  ])

  const [schedule, setSchedule] = useState ([
    {
      month1:"2월",
      day1:"18",
      scheduleTitle1:"신명산장",
      status1:"마감",
      time1:"오후 6:40",
      personnel1:"4/4명",
      scheduleImg1:"https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/26c0/live/566cd830-c50b-11ee-896d-39d9bd3cadbb.jpg.webp"
    },
    {
      month2:"3월",
      day2:"29",
      scheduleTitle2:"해외여행&골프",
      status2:"모집중",
      time2:"오후 6:00",
      personnel2:"2/4명",
      scheduleImg2:"https://cdnweb01.wikitree.co.kr/webdata/editor/202004/07/img_20200407162305_1f42c686.webp"
    },
    {
      month3:"6월",
      day3:"30",
      scheduleTitle3:"골프모임방.스크린.필드.레슨가능",
      status3:"모집중",
      time3:"오후 12:40",
      personnel3:"7/24명",
      scheduleImg3:"https://media.macphun.com/img/uploads/customer/blog/2189/16865538896486c5211639a2.92832067.jpg?q=85&w=1680"
    },
    {
      month4:"2월",
      day4:"18",
      scheduleTitle4:"모임에만 공개된 일정이에요.",
      status4:"종료",
      time4:"오후 1:00",
      personnel4:"2/8명",
      scheduleImg4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcKlmhi1kDsvz__5DjVvrv24w5t4dSZymxA&s"
    },
    {
      month5:"2월",
      day5:"18",
      scheduleTitle5:"골프 스크린 란딩전 연습",
      status5:"종료",
      time5:"오후 12:00",
      personnel5:"1/8명"
    },
  ])
  return(<ItemPresenter 
  itemDetails={itemDetails}
  album={album}
  member={member}
  schedule={schedule}
  />);
}

export default ItemContainer;