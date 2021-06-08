import React from "react";
import { TextField, Popper } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function InputMountain(props) {
  const [isCorrectName, setIsCorrectName] = React.useState(true);
  
  const ClickHandler = (text) => {
    props.getMountainValue(text);
    props.getKeyword(true);
    setIsCorrectName(true);
  };

  const ChangeHandler = (e) => {
    props.getKeyword(false);
    setIsCorrectName(false);
  };

  const styles = (theme) => ({
    popper: {},
  });

  const popperMy = (props) => {
    return <Popper {...props} style={styles.popper} placement="bottom-start" />;
  };

  return (
    <Autocomplete
      freeSolo
      options={mountainInfo}
      getOptionLabel={(option) => `${option.name} (${option.location})`}
      PopperComponent={popperMy}
      className="header-input"
      onChange={(event, value) =>
        value ? ClickHandler(value.name) : ClickHandler("")
      }
      renderInput={(params) => 
        <TextField 
        {...params}
        required 
        label="산/지역명" 
        id="input=mountain"
        name="mountain"
        InputLabelProps={{ shrink: true }} 
        onChange={ChangeHandler}
        error={!isCorrectName} />}
    />
  );
}

const mountainInfo = [
  {
    name: "가리산",
    location: "강원도 춘천시 북산면ㆍ동면, 홍천군 두촌면ㆍ화촌면",
  },
  {
    name: "가리왕산",
    location: "강원도 정선군 정선읍 회동리ㆍ북평면, 평창군 진부면",
  },
  { name: "가야산", location: "경상남도 합천군ㆍ거창군, 경상북도 성주군" },
  {
    name: "가지산",
    location: "울산광역시, 경상북도 청도군, 경상남도 밀양시",
  },
  {
    name: "감악산",
    location: "경기도 양주시 남면, 연천군 전곡읍, 파주시 적성면",
  },
  {
    name: "강천산",
    location: "전라북도 순창군 팔덕면, 전라남도 담양군 용면",
  },
  {
    name: "계룡산",
    location:
      "대전광역시, 충청남도 공주시 계룡면ㆍ논산시 상월면ㆍ계룡시 신도안면",
  },
  { name: "계방산", location: "강원도 홍천군 내면, 평창군 용편면ㆍ진부면" },
  { name: "공작산", location: "강원도 홍천군 동면, 화촌면" },
  {
    name: "관악산",
    location: "서울특별시 관악구ㆍ금천구, 경기도 안양시ㆍ과천시",
  },
  {
    name: "구병산",
    location: "경상북도 상주시 화북면,  충청북도 보은군 마로면ㆍ속리산면",
  },
  { name: "금산", location: "경상남도 남해군 상주면ㆍ이동면ㆍ삼동면" },
  { name: "금수산", location: "충청북도 제천시 수산면ㆍ단양군 적성면" },
  {
    name: "금오산",
    location: "경상북도 구미시, 칠곡군 북삼읍, 김천시 남면",
  },
  { name: "금정산", location: "부산광역시 금정구ㆍ북구, 경상남도 양산시" },
  { name: "깃대봉", location: "전라남도 신안 흑산면 홍도" },
  { name: "남산", location: "경상북도 경주시 남산동ㆍ내남면" },
  {
    name: "내연산",
    location: "경상북도 포항시 송라면ㆍ청하면ㆍ죽장면, 영덕군 남정면",
  },
  {
    name: "내장산",
    location: "전라북도 정읍시 내장동, 순창군 복흥면ㆍ쌍치면",
  },
  {
    name: "대둔산",
    location:
      "충청남도 논산시 벌곡면ㆍ금산군 진산면, 전라북도 완주군 온주면",
  },
  { name: "대암산", location: "강원 양구군 동면, 인제군 서화면" },
  {
    name: "대야산",
    location: "경상북도 문경시 가은읍, 충청북도 괴산군 청천면",
  },
  { name: "덕숭산(수덕산)", location: "충청남도 예산군 덕산면" },
  {
    name: "덕유산(향적봉)",
    location: "전라북도 무주군ㆍ장수군, 경상남도 거창군ㆍ함양군",
  },
  { name: "덕항산", location: "강원도 삼척시 신기면ㆍ태백시 하사미동" },
  { name: "도락산", location: "충청북도 단양군 단성면, 대강면" },
  {
    name: "도봉산(자운봉)",
    location: "서울특별시 도봉구, 경기도 의정부시 호원동ㆍ양주시 장흥면",
  },
  {
    name: "두륜산",
    location: "전라남도 해남군 삼산면ㆍ북일면ㆍ북평면ㆍ현산면",
  },
  {
    name: "두타산",
    location: "강원도 동해시 삼화동, 삼척시 미로면ㆍ하장면",
  },
  { name: "마니산", location: "인천광역시 강화군 화도면" },
  { name: "마이산", location: "전라북도 진안군 진안읍ㆍ마령면" },
  {
    name: "명성산",
    location: "강원도 철원군 갈말읍, 경기도 포천시 영북면ㆍ이동면",
  },
  { name: "명지산", location: "경기도 가평군 북면ㆍ하면" },
  {
    name: "모악산",
    location: "전라북도 김제시 금산면ㆍ전주시 완산구ㆍ완주군 구이면",
  },
  {
    name: "무등산",
    location: "광주광역시 동구, 전라남도 담양군 남면ㆍ화순군 이서면",
  },
  { name: "무학산", location: "경상남도 창원시 교방동" },
  { name: "미륵산", location: "경상남도 통영시 산양읍ㆍ봉평동" },
  {
    name: "민주지산",
    location:
      "충청북도 영동군 상촌면ㆍ용화면, 전라북도 무주군 설천면, 경상북도 김천시 부항면",
  },
  {
    name: "방장산",
    location: "전라남도 장성군, 전라북도 고창군 신림면ㆍ정읍시 입암면",
  },
  { name: "방태산", location: "강원도 인제군 기린면, 상남면" },
  {
    name: "백덕산",
    location: "강원도 평창군 방림면, 횡성군 안흥면, 영월군 수주면",
  },
  {
    name: "백암산",
    location: "전라북도 순창군 복흥면, 전라남도 장성군 북하면",
  },
  {
    name: "백운산(광양)",
    location:
      "전라남도 광양시 봉강면ㆍ옥룡면ㆍ진상면ㆍ다압면, 구례군 간전면",
  },
  { name: "백운산(정선)", location: "강원도 정선군 신동읍, 평창군 미탄면" },
  {
    name: "백운산(포천)",
    location: "경기도 포천시 이동면, 강원도 화천군 사내면",
  },
  { name: "변산", location: "전라북도 부안군 변산면, 상서면, 진서면" },
  {
    name: "북한산",
    location:
      "서울특별시 강북구ㆍ성북구ㆍ종로구ㆍ은평구, 경기도 고양시ㆍ양주시",
  },
  {
    name: "비슬산",
    location:
      "대구광역시 달성군 옥포면ㆍ유가면ㆍ가창면, 경상북도 청도군 각북면",
  },
  { name: "삼악산", location: "강원도 춘천시 서면" },
  {
    name: "서대산",
    location: "충청남도 금산군 추부면ㆍ군북면, 충청북도 옥천군 군서면",
  },
  { name: "선운산", location: "전라북도 고창군 아산면ㆍ심원면ㆍ해리면" },
  {
    name: "설악산",
    location:
      "강원도 속초시 설악동, 인제군 북면ㆍ인제읍, 양양군 서면ㆍ강현면",
  },
  { name: "성인봉", location: "경상북도 울릉군 울릉읍 서면ㆍ북면" },
  {
    name: "소백산",
    location: "경상북도 영주시 풍기읍, 충청북도 단양군 단양읍",
  },
  { name: "소요산", location: "경기도 동두천시, 포천시 신북면" },
  {
    name: "속리산",
    location: "경상북도 상주시 화북면, 충청북도 보은군 내속리면",
  },
  { name: "신불산", location: "울산광역시 울주군 삼남면ㆍ상북면" },
  { name: "연화산", location: "경상남도 고성군 개천면ㆍ영현면" },
  {
    name: "오대산",
    location: "강원도 평창군 진부면, 홍천군 내면, 강릉시 연곡면",
  },
  { name: "오봉산", location: "강원도 춘천시 북산면, 화천군 간동면" },
  { name: "용문산", location: "경기도 양평군 용문면ㆍ옥천면" },
  {
    name: "용화산",
    location: "강원도 화천군 간동면ㆍ하남면, 춘천시 사북면",
  },
  {
    name: "운문산",
    location: "경상북도 청도군 운문면, 경상남도 밀양시 산내면",
  },
  { name: "운악산", location: "경기도 가평군 하면, 포천시 화현면" },
  {
    name: "운장산",
    location: "전라북도 진안군 주천면ㆍ부귀면ㆍ정천면, 완주군 동상면",
  },
  { name: "월악산", location: "충청북도 제천시 한수면, 덕산면" },
  {
    name: "월출산",
    location: "전라남도 영암군 영암읍ㆍ군서면ㆍ학산면, 강진군 성전면",
  },
  { name: "유명산", location: "경기도 가평군 설악면, 양평군 옥천면" },
  {
    name: "응봉산",
    location: "강원도 삼척시 가곡면ㆍ원덕읍, 경상북도 울진군 북면",
  },
  { name: "장안산", location: "전라북도 장수군 장수읍, 계남면" },
  {
    name: "재약산",
    location: "경상남도 밀양시 단장면ㆍ산내면, 울산광역시 울주군 상북면",
  },
  { name: "적상산", location: "전라북도 무주군 적상면" },
  { name: "점봉산", location: "강원도 양양군 서면, 인제군 기린면ㆍ인제읍" },
  { name: "조계산", location: "전라남도 순천시 승주읍ㆍ송광면" },
  {
    name: "주왕산",
    location: "경상북도 청송군 청송읍ㆍ부동면, 영덕군 지품면ㆍ달산면",
  },
  { name: "주흘산", location: "경상북도 문경시 문경읍" },
  {
    name: "지리산",
    location:
      "전라북도 남원시, 전라남도 구례군, 경상남도 하동군ㆍ산청군ㆍ함양군",
  },
  { name: "지리산(통영)", location: "경상남도 통영시 사량면" },
  { name: "천관산", location: "전라남도 장흥군 관산읍, 대덕읍" },
  { name: "천마산", location: "경기도 남양주시 오남읍, 화도읍" },
  { name: "천성산", location: "경상남도 양산시 하북면, 상북면, 웅상읍" },
  {
    name: "천태산",
    location: "충청북도 영동군 양산면, 충청남도 금산면 제원면",
  },
  { name: "청량산", location: "경상북도 봉화군 명호면" },
  {
    name: "추월산",
    location: "전라남도 담양군 용면, 전라북도 순창군 복흥면",
  },
  { name: "축령산", location: "경기도 남양주시 수동면, 가평군 상면" },
  { name: "치악산", location: "강원도 원주시, 횡성군, 영월군" },
  { name: "칠갑산", location: "충청남도 청양군 대치면, 정산면, 장평면" },
  { name: "태백산", location: "강원도 태백시, 경상북도 봉화군 석포면" },
  {
    name: "태화산",
    location: "강원도 영월군 영월읍, 충청북도 단양군 영춘면",
  },
  {
    name: "팔공산",
    location: "경상북도 군위군 부계면, 영천시 신녕면, 대구광역시 동구",
  },
  { name: "팔봉산", location: "강원도 홍천군 서면 팔봉리" },
  { name: "팔영산", location: "전남 고흥군 영남면 우천리" },
  { name: "한라산", location: "제주도 제주시, 서귀포시" },
  {
    name: "화악산(중봉)",
    location: "경기도 가평군 북면, 강원도 화천군 사내면",
  },
  { name: "화왕산", location: "경상남도 창녕군 창녕읍 옥천리 일대" },
  {
    name: "황매산",
    location: "경상남도 합천군 대병면, 가회면, 산청군 차황면.",
  },
  { name: "황석산", location: "경상남도 함양군" },
  { name: "황악산", location: "경상북도 김천시 대항면 운수리" },
  { name: "황장산", location: "경상북도 문경시 동로면" },
  {
    name: "희양산",
    location: "경상북도 문경시 가은읍, 충청북도 괴산군 연풍면,",
  },
]