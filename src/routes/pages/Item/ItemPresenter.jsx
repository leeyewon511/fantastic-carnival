import React from "react";
import "./Item.css";
import { IoChevronForwardOutline } from "react-icons/io5";
import { HiMiniMapPin } from "react-icons/hi2";
import { IoIosLock } from "react-icons/io";
import {  IoTime } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";

const Itempresenter =(props)=>{
  const details = props.itemDetails;
  const album = props.album;
  const member = props.member;
  const schedule1=props.schedule[0];
  const schedule2=props.schedule[1];
  const schedule3=props.schedule[2];
  const schedule4=props.schedule[3];
  const schedule5=props.schedule[4];
  // const schedule=props.schedule;

  return(
    <div>
      <div className="Item-category">
        <a href="/">홈</a>
        <span>{">"}</span>
        <a href="/Group">모임</a>
        <span>{">"}</span>
        <span>{details.itemTitle}</span>
      </div>

      <div className="item-page">

      <div className="item-Main">
        <div className="item-details-header">
            <img src={details.itemImg} className="itemImg"/>
          <div className="item-details-title">
            <span className="itemTitle">{details.itemTitle}</span>
          <div className="item-details-meta">
            <span className="itemMember">{details.itemMember}</span>
            <span className="itemPost">{details.itemPost}</span>
          </div>
          </div>
        </div>

        <div className="itemContent">{details.itemContent}</div>

        <div className="item-category">
        <div className="itemArea"><HiMiniMapPin size={16} className="areaIcon" />{details.itemArea}</div>
        <div className="itemFriend">{details.itemFriend}</div>
        <div className="itemAge">{details.itemAge}</div>
        </div>
        <button className="item-goapp">당근 앱에서 보기</button>
      </div>

      <div className="item-content">

        <div className="item-album">
          <div className="album-header">
          <h2 className="albumTitle">앨범</h2>
          <button className="albumMore">더보기<IoChevronForwardOutline size={20}/></button>
          </div>
          <div className="albumImg">              {/*map을 감싸는 최상위 부모에게 display: flex를 주어야 가로 정렬이 적용됨 */}
          {album.map((a)=>{          
            return(
              <div>
              <img src={a.albumImg} className="albumImg-img"/>
              </div>
            )
          })}
          </div>
        </div>

        <div className="item-member">
          <div className="member-header">
          <h2 className="memberTitle">멤버 62</h2>
          <button className="memberMore">더보기<IoChevronForwardOutline size={20}/></button>
          </div>
          <div className="member-post">
          {member.map((m)=>{
            return(
              <div className="memberPost">
                <div >
                  <img src={m.profile} className="member-profile-img"/>
                </div>
                <div className="member-details">
                <div className="member-info">
                  <div className="memberNickname">{m.nickname}</div>
                  <div className="memberLocation">{m.location}</div>
                </div>
                <div className="member-description">
                  <div>{m.description}</div>
                </div>
                </div>
              </div>
            )
          })}  
          </div>  
        </div>

        <div className="item-schedule">
          <div className="schedule-header">
          <h2 className="scheduleTitle">일정 332</h2>
          <button className="scheduleMore">더보기<IoChevronForwardOutline size={20}/></button>
          </div>

          <div className="schedule-content">
          <div className="schedule-post">
            <div className="schedule-date">
              <div className="scheduleMonth">{schedule1.month1}</div>
              <div className="scheduleDay">{schedule1.day1}</div>
            </div>
            <div className="schedule-info">
                <div className="scheduleTitle1">{schedule1.scheduleTitle1}</div>
                <div className="scheduleStatus1">{schedule1.status1}</div>
              <div className="schedule-meta">  
                <div className="scheduleTime"><IoTime size={17} />{schedule1.time1}</div>
                <div className="schedulePersennel"><MdPeopleAlt size={17} />{schedule1.personnel1}</div>
              </div>  
            </div>
              <img src={schedule1.scheduleImg1} className="scheduleImg"/>
          </div>

          <div className="schedule-post">
            <div className="schedule-date">
              <div className="scheduleMonth">{schedule2.month2}</div>
              <div className="scheduleDay">{schedule2.day2}</div>
            </div>
            <div className="schedule-info">
                <div className="scheduleTitle2">{schedule2.scheduleTitle2}</div>
                <div className="scheduleStatus2">{schedule2.status2}</div>
              <div className="schedule-meta"> 
                <div className="scheduleTime"><IoTime size={17} />{schedule2.time2}</div>
                <div className="schedulePersennel"><MdPeopleAlt size={17}/>{schedule2.personnel2}</div>
              </div>
            </div>
              <img src={schedule2.scheduleImg2} className="scheduleImg"/>
          </div>

          <div className="schedule-post">
            <div className="schedule-date">
              <div className="scheduleMonth">{schedule3.month3}</div>
              <div className="scheduleDay">{schedule3.day3}</div>
            </div>
            <div className="schedule-info">
                <div className="scheduleTitle3">{schedule3.scheduleTitle3}</div>
                <div className="scheduleStatus3">{schedule3.status3}</div>
              <div className="schedule-meta"> 
                <div className="scheduleTime"><IoTime size={17} />{schedule3.time3}</div>
                <div className="schedulePersennel"><MdPeopleAlt size={17}/>{schedule3.personnel3}</div>
              </div>
            </div>
              <img src={schedule3.scheduleImg3} className="scheduleImg"/>
          </div>

          <div className="schedule-post">
            <div className="schedule-date">
              <div className="scheduleMonth">{schedule4.month4}</div>
              <div className="scheduleDay">{schedule4.day4}</div>
            </div>
            <div className="schedule-info">
                <div className="scheduleTitle4"><IoIosLock size={18} />{schedule4.scheduleTitle4}</div>
                <div className="scheduleStatus4">{schedule4.status4}</div>
              <div className="schedule-meta"> 
                <div className="scheduleTime"><IoTime size={17} />{schedule4.time4}</div>
                <div className="schedulePersennel"><MdPeopleAlt size={17}/>{schedule4.personnel4}</div>
              </div>
            </div>
              <img src={schedule4.scheduleImg4} className="scheduleImg"/>
          </div>

          <div className="schedule-post">
            <div className="schedule-date">
              <div className="scheduleMonth">{schedule5.month5}</div>
              <div className="scheduleDay">{schedule5.day5}</div>
            </div>
            <div className="schedule-info">
                <div className="scheduleTitle5">{schedule5.scheduleTitle5}</div>
                <div className="scheduleStatus5">{schedule5.status5}</div>
              <div className="schedule-meta"> 
                <div className="scheduleTime"><IoTime size={17} />{schedule5.time5}</div>
                <div className="schedulePersennel"><MdPeopleAlt size={17}/>{schedule5.personnel5}</div>
              </div>
            </div>
             
          </div>
          </div>
        </div>

       {/* <div className="item-schedule">
          <h2 className="scheduleTitle">일정 332</h2>
          <div className="schedule-post">
          {schedule.map((s)=>{
            return(
                <div className="schedule-content">
                <div className="schedule-date">
                  <div className="scheduleMonth">{s.month}</div>
                  <div className="scheduleDay">{s.day}</div>
                </div>

                <div className="schedule-info">
                  <div className="scheduleTitle">{s.scheduleTitle}</div>
                  <div className="scheduleStatus">{s.status}</div>
                  <div className="scheduleTime">{s.time}</div>
                  <div className="schedulePersennel">{s.persennel}</div>
                </div>

                <img src={s.scheduleImg} className="scheduleImg"/>
                </div>
            )
          })}
          </div>
        </div> */}
      </div>
      </div>
    </div>
  )
}

export default Itempresenter;