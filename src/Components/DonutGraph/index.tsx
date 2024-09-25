import * as S from "./styled";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Color } from "../../Styles/Color";
import { Font } from "../../Styles/Font";
import Crown from "../../assets/img/SVG/Crown.svg"

ChartJS.register(ArcElement, Tooltip, Legend);

const result = [
  { menu: "꼬사삭 치킨", percent: 78, king: true },
  { menu: "국물 떡볶이", percent: 16, king: false },
  { menu: "청국장", percent: 12, king: false },
  { menu: "기타", percent: 6, king: false },
]

const labelColor = ["#FF583B", "#2784FF", "#C707F2", "#959595"]

export default function DonutGraph() {
  const Data = {
    labels: result.map(item => item.menu),
    datasets: [
      {
        data: [40, 25, 35],
        backgroundColor: ["#FF9B8A", "#959595", "#D2D2D2"],
        borderColor: "#FFFFFF",
        borderWidth: 5,
      },
    ],
  };

  const Options = {
    plugins: {
      tooltip: {
        backgroundColor: "white", // 툴팁 배경을 흰색으로
        titleColor: `${Color.gray700}`, // 타이틀 색상도 검정으로
        bodyColor: `${Color.gray700}`,
        borderWidth: 1,
        displayColors: false, // 툴팁에서 색상 네모를 제거
        titleFont: {
          family: "Pretendard-Medium", // 폰트 패밀리
          size: 12, // 폰트 크기
        },
        bodyFont: {
          family: "Pretendard-Medium", // 폰트 패밀리
          size: 12, // 폰트 크기
        },
      },
    },
    cutout: "65%", // 도넛 차트의 비율
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
        {
          result.map((value, index) => (
            <S.MenuAndPercent>
              <S.MenuWrap>
                <S.PointLine style={{ backgroundColor: labelColor[index] }}></S.PointLine>
                <Font text={value.menu} kind="Heading3" color="gray600" />
                {value.king ? <S.Image src={Crown} /> : null}
              </S.MenuWrap>
              <Font text={`${value.percent}%`} kind="Body1" color="gray600" />
            </S.MenuAndPercent>
          ))
        }
      </S.ResultWrap>
    </S.Container>
  );
}
