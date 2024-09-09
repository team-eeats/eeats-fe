import * as S from "./styled";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Color } from "../../Styles/Color";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutGraph() {
  const Data = {
    labels: ["꼬사삭 치킨", "국물 떡볶이", "청국장"],
    datasets: [
      {
        data: [40, 25, 35],
        backgroundColor: [`${Color.main500}`, "#b5f2ff", "#c5f2ba"],
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
      <Doughnut data={Data} options={Options}></Doughnut>
    </S.Container>
  );
}
