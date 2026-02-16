import React, { useState } from "react";
import GroupPresenter from "./GroupPresenter";


const GroupContainer=()=>{
  const [localMeet,setLocalMeet]=useState([
  {
    id: 0,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232013874893295828992&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "💖우리들:같이의가치💖WA.FAM",
    groupContent: "✨️한글명:우리들 ✨️영문명:We Are Family (WA.FAM) ⏩️정관/기장 인근 지역 친목 모임입니다. 매주 정기적인 모임과 번개를 통해 이웃 간의 따뜻한 정을 나누고 있어요. 맛집 탐방, 드라이브, 영화 관람 등 다양한 활동을 함께하며 소중한 인연을 만들어가실 분들 모두 환영합니다! 혼자 고민하지 말고 저희와 함께 즐거운 동네 생활 시작해요.",
    groupArea: "정관읍",
    groupHits: "69",
    groupCategory: "동네친구"
  },
  {
    id: 1,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%231962014594213654528&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "아침을 여는 정관 러닝 크루(JRC)",
    groupContent: "매주 화, 목 오전 7시 중앙공원에서 건강하게 하루를 시작하실 분들 모집합니다! 초보자분들도 페이스 조절하며 함께 뛰실 수 있도록 도와드려요. 혼자 뛰면 지루하지만 같이 뛰면 끝까지 갈 수 있습니다. 러닝 후 가벼운 커피 한 잔과 함께 동네 정보도 공유하는 활기찬 아침을 만들어봐요. 운동화만 신고 가볍게 나오세요!",
    groupArea: "정관읍",
    groupHits: "124",
    groupCategory: "운동"
  },
  {
    id: 2,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%231952232961166532608&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "정관 카공족 모임 ✍️",
    groupContent: "집에서는 자꾸 눕게 되고 집중 안 되시는 분들! 주말마다 정관 내 조용하고 분위기 좋은 카페를 찾아다니며 각자 공부하는 모임입니다. 자격증, 영어 공부, 독서 등 어떤 것이든 좋습니다. 서로의 열정에 자극받으며 생산적인 주말을 보내고 싶으신 분들의 참여를 기다립니다. 같이 열공해서 목표 달성해요!",
    groupArea: "정관읍",
    groupHits: "45",
    groupCategory: "스터디"
  },
  {
    id: 3,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%231998494273332301824&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "🍖 정관 맛집 도장깨기",
    groupContent: "혼자 가기엔 양이 너무 많거나 예약이 힘든 맛집들, 이제 같이 가요! 2030 직장인들 위주로 구성되어 퇴근 후나 주말에 맛있는 음식을 먹으며 힐링하는 모임입니다. 정관 내 숨은 맛집부터 SNS 핫플까지 구석구석 찾아다닐 예정입니다. 미식가분들, 그리고 맛있는 음식과 대화를 즐기는 분들 환영합니다.",
    groupArea: "정관읍",
    groupHits: "210",
    groupCategory: "맛집/카페"
  },
  {
    id: 4,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%231960214421366296576&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "댕댕이 산책 친구 구함 🐶",
    groupContent: "혼자 산책하기 심심해하는 우리 아이를 위해 친구를 만들어주세요! 매일 저녁 8시경 중앙공원이나 좌광천에서 산책 모임을 가집니다. 강아지 사회성도 길러주고 보호자님들끼리 사료나 간식 정보, 병원 추천 등 다양한 육아 꿀팁도 공유해요. 매너 벨과 배변 봉투는 필수! 매너 있는 반려인분들 환영합니다.",
    groupArea: "정관읍",
    groupHits: "88",
    groupCategory: "반려동물"
  },
  {
    id: 5,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%231916496721081389056&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "퇴근 후 배드민턴 한 게임?",
    groupContent: "실력 상관없이 셔틀콕 주고받으며 땀 흘리실 분 계신가요? 퇴근 후 가벼운 운동으로 스트레스를 날려버려요. 정관 내 실내 체육관이나 근처 공원에서 모입니다. 라켓이 없으셔도 대여해 드릴 수 있으니 편하게 신청해 주세요. 초보자분들도 기본기부터 가르쳐 드립니다. 함께 즐겁게 운동해요!",
    groupArea: "좌천리",
    groupHits: "32",
    groupCategory: "운동"
  },
  {
    id: 6,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232006512745420992512&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "정관 보드게임 동호회 🎲",
    groupContent: "루미큐브, 할리갈리 같은 간단한 게임부터 복잡한 전략 게임까지! 보드게임의 매력에 빠져보실 분들 모집합니다. 매주 금요일 저녁 보드게임 카페에서 정기적으로 모이고 있어요. 처음 오시는 분들도 규칙 친절하게 설명해 드리니 걱정 마세요. 머리 쓰고 웃고 떠들다 보면 시간 가는 줄 모릅니다. 함께 즐겨요!",
    groupArea: "정관읍",
    groupHits: "56",
    groupCategory: "게임/오락"
  },
  {
    id: 7,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232011151557992742912&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "모닝 독서 & 미라클 모닝",
    groupContent: "누구보다 빠르게 하루를 시작하는 정관 부지런이들 모임입니다! 아침 시간을 알차게 활용해 책을 읽고, 느낀 점을 짧게 공유하며 서로의 성장을 응원해요. 독서뿐만 아니라 그날의 계획을 세우거나 자기계발을 하는 시간으로 채웁니다. 혼자 하면 작심삼일이지만 함께하면 습관이 됩니다. 미라클 모닝 함께 도전해요!",
    groupArea: "매학리",
    groupHits: "27",
    groupCategory: "자기계발"
  },
  {
    id: 8,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232006150819596042240&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "코인 노래방 듀엣 모집 🎤",
    groupContent: "노래 부르는 건 좋아하는데 혼자 가긴 조금 쑥스러우신 분! 혹은 같이 화음 맞춰 노래하고 싶은 분들 계신가요? 장르 불문 노래를 사랑하는 동네 친구를 찾습니다. 가볍게 코노 한 판 때리고 스트레스 풀어요. 점수 내기나 노래 추천 환영합니다. 매너 있게 함께 즐겁게 노래하실 분들 챗 주세요!",
    groupArea: "정관읍",
    groupHits: "15",
    groupCategory: "동네친구"
  },
  {
    id: 9,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232021921369324503040&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "일광신도시 등산 모임 ⛰️",
    groupContent: "주말 오전, 일광산이나 달음산의 상쾌한 공기를 마시며 등산하실 분들 모집합니다. 정상을 향해 함께 땀 흘리고 내려와서 마시는 시원한 막걸리 한 잔의 즐거움을 함께 나눠요. 등산 초보자 페이스에 맞춰 천천히 올라가니 부담 갖지 마세요. 사계절 변화하는 산의 풍경을 함께 만끽할 인연을 기다립니다.",
    groupArea: "일광읍",
    groupHits: "92",
    groupCategory: "운동"
  },
  {
    id: 10,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%231886559544751005696&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "정관 맘스 카페 수다방 ☕",
    groupContent: "독박 육아에 지친 어머님들, 잠시나마 차 한 잔의 여유를 함께 즐겨요! 평일 낮 시간에 모여 아이들 교육 정보, 동네 세일 소식, 남편 뒷담화(?)까지 시원하게 털어놓는 힐링 타임입니다. 아이들끼리도 친구 만들어주고 엄마들도 든든한 동네 친구가 되는 곳입니다. 따뜻한 조언과 격려가 필요한 맘들 모이세요!",
    groupArea: "정관읍",
    groupHits: "104",
    groupCategory: "육아"
  },
  {
    id: 11,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232001675690227376128&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "헬린이 탈출 웨이트 모임",
    groupContent: "헬스장 끊어놓고 기구 사용법 몰라 런닝머신만 타다 오시나요? 이제 같이 득근해요! 정확한 자세 잡는 법부터 식단 관리 팁까지 서로 아는 정보를 공유합니다. 파트너 운동을 통해 근성장을 극대화하고 의지가 꺾이지 않도록 서로 잡아주는 모임입니다. 혼자 하는 운동보다 100배는 즐겁습니다. 같이 열운해요!",
    groupArea: "용수리",
    groupHits: "48",
    groupCategory: "운동"
  },
  {
    id: 12,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232021038471885721600&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "원데이 드로잉 클래스",
    groupContent: "일상의 소소한 풍경을 캔버스에 담아보고 싶지 않으신가요? 그림 실력은 전혀 중요하지 않습니다. 붓을 들고 색을 칠하는 행위 자체에서 오는 힐링을 함께 느껴봐요. 각자 재료를 챙겨 공원이나 예쁜 카페에서 만나 자유롭게 그림을 그립니다. 서로의 작품을 감상하며 칭찬을 아끼지 않는 따뜻한 모임입니다.",
    groupArea: "정관읍",
    groupHits: "39",
    groupCategory: "문화/예술"
  },
  {
    id: 13,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232003285384096079872&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "자취생 집밥 교환회 🍱",
    groupContent: "혼자 살면서 반찬 골고루 만들어 먹기 힘드시죠? 각자 자신 있는 반찬을 넉넉히 만들어 서로 교환하는 실속 만점 모임입니다. 식비도 절약하고 다양한 집밥의 맛을 느낄 수 있어요. 남은 식재료 공유나 간단한 자취 레시피 공유도 함께합니다. 따뜻한 밥 한 끼의 소중함을 아는 자취생 여러분의 참여를 기다립니다.",
    groupArea: "정관읍",
    groupHits: "73",
    groupCategory: "요리/제조"
  },
  {
    id: 14,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%231885184079784132608&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "기장 해안길 자전거 라이딩",
    groupContent: "바다 냄새 맡으며 해안로를 따라 자전거 라이딩하실 분들 모집합니다! 일광에서 임랑까지 시원하게 달리고 카페에서 시원한 음료 한 잔 하며 휴식해요. 속도 경쟁보다는 풍경을 즐기는 샤방 라이딩 위주입니다. 자전거 종류 상관없어요. 안전 수칙 잘 지키며 함께 즐겁게 라이딩하실 분들 신청해 주세요!",
    groupArea: "일광읍",
    groupHits: "61",
    groupCategory: "운동"
  },
  {
    id: 15,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232011580914317328384&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "통기타 초보 탈출기 🎸",
    groupContent: "구석에 먼지만 쌓여가는 기타를 다시 꺼낼 시간입니다! C코드부터 차근차근, 인기 있는 가요나 팝송 한 곡 마스터를 목표로 같이 연습해요. 독학으로 한계에 부딪히신 분들, 기본 주법을 익히고 싶은 분들 모두 환영합니다. 서로의 연주를 들어주며 실력을 키워가요. 음악으로 소통하며 즐거운 취미 생활을 만들어봐요.",
    groupArea: "정관읍",
    groupHits: "42",
    groupCategory: "문화/예술"
  },
  {
    id: 16,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%231923155038064254976&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "정관 사진 출사 모임 📸",
    groupContent: "폰 카메라부터 DSLR까지, 찰나의 순간을 기록하는 것을 좋아하시나요? 정관 인근의 예쁜 풍경이나 핫한 카페를 찾아다니며 사진을 찍고 공유하는 모임입니다. 보정 방법이나 촬영 팁도 서로 나누고, 서로의 인생샷을 찍어주는 훈훈한 활동을 합니다. 시선이 닿는 곳마다 작품이 되는 즐거움을 함께 느껴봐요.",
    groupArea: "정관읍",
    groupHits: "55",
    groupCategory: "취미"
  },
  {
    id: 17,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-community%232020422839294271488&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "여름 대비 다이어트 복싱",
    groupContent: "여름이 다가오고 있습니다! 이제는 움직여야 할 때! 신나는 음악에 맞춰 샌드백을 치며 스트레스도 풀고 살도 뺍니다. 복싱 기술 습단과 함께 체력 훈련도 병행하여 건강한 몸매를 함께 만들어가요. 혼자 하면 금방 지치지만 같이 기합 넣으며 운동하면 목표 체중에 도달할 수 있습니다. 지금 바로 시작하세요!",
    groupArea: "방곡리",
    groupHits: "31",
    groupCategory: "운동"
  },
  {
    id: 18,
    groupImg: "https://community-api-cdn.kr.karrotmarket.com/v1/resource/images/load?id=kr-23232559%231522472224702337024&q=82&s=300x300&t=crop&f=webp",
    groupTitle: "영어로 수다 떨기 (English Chat)",
    groupContent: "Hello everyone! 영어를 배우고는 싶지만 학원은 부담스러우신 분들, 외국인 공포증을 없애고 싶으신 분들 환영합니다. 수준 상관없이 아는 단어 총동원해서 자유롭게 영어로 대화하는 모임입니다. 틀려도 괜찮습니다! 자신감 있게 말하는 게 중요해요. 커피 한 잔 마시며 가볍게 영어로 수다 떨 이웃분들을 찾습니다.",
    groupArea: "정관읍",
    groupHits: "29",
    groupCategory: "외국어"
  }
]);
  return(<GroupPresenter groupPage={localMeet}/>)
}

export default GroupContainer;