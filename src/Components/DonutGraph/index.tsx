import * as S from "./styled";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import { Color } from "../../Styles/Color";
import { Font } from "../../Styles/Font";
import Crown from "../../assets/img/SVG/Crown.svg";

ChartJS.register(ArcElement, Tooltip, Legend);

const result = [
  { menu: "꼬사삭 치킨", percent: 78, king: true },
  { menu: "국물 떡볶이", percent: 16, king: false },
  { menu: "청국장", percent: 12, king: false },
  { menu: "기타", percent: 6, king: false },
];

const labelColor = ["#FF583B", "#2784FF", "#C707F2", "#959595"];

export default function DonutGraph() {
  // 클릭된 인덱스를 추적하는 상태값
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const defaultColors = ["#FF9B8A", "#959595", "#D2D2D2"]; // 초기 색상
  const highlightColors = [
    ["#FF9B8A", "#959595", "#D2D2D2"], // 첫번째 인덱스 클릭 시 색상
    ["#D2D2D2", "#2784FF", "#959595"], // 두번째 인덱스 클릭 시 색상
    ["#959595", "#D2D2D2", "#C707F2"], // 세번째 인덱스 클릭 시 색상
  ];

  const handleClick = (event: ChartEvent, elements: ActiveElement[]) => {
    if (elements.length > 0) {
      const clickedIndex = elements[0].index;
      setSelectedIndex(clickedIndex); // 클릭된 인덱스 저장
    }
  };

  const Data = {
    labels: result.map((item) => item.menu),
    datasets: [
      {
        data: [40, 25, 35],
        backgroundColor:
          selectedIndex !== null
            ? highlightColors[selectedIndex]
            : defaultColors, // 선택된 인덱스에 따른 색상 변경
        borderColor: "#FFFFFF",
        borderWidth: 5,
      },
    ],
  };

  const Options = {
    plugins: {
      tooltip: {
        backgroundColor: "white",
        titleColor: `${Color.gray700}`,
        bodyColor: `${Color.gray700}`,
        borderWidth: 1,
        displayColors: false,
        titleFont: {
          family: "Pretendard-Medium",
          size: 12,
        },
        bodyFont: {
          family: "Pretendard-Medium",
          size: 12,
        },
      },
    },
    cutout: "65%", // 도넛 차트의 비율
    onClick: handleClick, // 클릭 이벤트 핸들러 추가
  };

  return (
    <S.Container>
      <S.DoughnutContent>
        <S.Hide></S.Hide>
        <Doughnut data={Data} options={Options}></Doughnut>
        <S.VoteNumber>
          <Font text="투표인원" kind="Label3" color="gray400" />
          <Font text="259명" kind="Heading2" />
        </S.VoteNumber>
      </S.DoughnutContent>

      <S.ResultWrap>
        <Font text="전체결과" kind="Body1" color="gray300" />
        {result.map((value, index) => (
          <S.MenuAndPercent key={index}>
            <S.MenuWrap>
              <S.PointLine
                style={{ backgroundColor: labelColor[index] }}
              ></S.PointLine>
              <Font text={value.menu} kind="Heading3" color="gray600" />
              {value.king ? <S.Image src={Crown} /> : null}
            </S.MenuWrap>
            <Font text={`${value.percent}%`} kind="Body1" color="gray600" />
          </S.MenuAndPercent>
        ))}
      </S.ResultWrap>
    </S.Container>
  );
}
