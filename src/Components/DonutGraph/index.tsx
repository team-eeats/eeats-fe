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
import { useEffect, useState } from "react";
import { Color } from "../../Styles/Color";
import { Font } from "../../Styles/Font";
import { VoteListResponse } from "../../Apis/polls/type";
import { VoteList } from "../../Apis/polls";

ChartJS.register(ArcElement, Tooltip, Legend);

const labelColor = ["#FF583B", "#2784FF", "#C707F2", "#959595"];

export default function DonutGraph() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [data, setData] = useState<VoteListResponse | null>(null);
  let TotalVote = 0;

  useEffect(() => {
    const handleVoteList = async () => {
      try {
        const response = await VoteList();
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleVoteList();
  }, []);

  if (data?.polls && data.polls[6]?.options) {
    TotalVote = data.polls[6].options.reduce(
      (sum, option) => sum + option.voteCount,
      0
    );
  }

  const chartData = {
    labels: data?.polls[6]?.options.map((option) => option.description),
    datasets: [
      {
        data: data?.polls[6]?.options.map((option) => option.voteRate),
        backgroundColor: selectedIndex !== null ? labelColor : "#D2D2D2",
        borderColor: "#FFFFFF",
        borderWidth: 5,
      },
    ],
  };

  const options = {
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
    cutout: "65%",
    onClick: (event: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        setSelectedIndex(elements[0].index);
      }
    },
    layout: {
      padding: 8, // 그래프 주변 여백 추가
    },
  };

  return (
    <S.Container>
      <S.DoughnutContent>
        <S.Hide></S.Hide>
        <Doughnut data={chartData} options={options}></Doughnut>
        <S.VoteNumber>
          <Font text="투표인원" kind="Label3" color="gray400" />
          <Font text={`${TotalVote}명`} kind="Heading2" />
        </S.VoteNumber>
      </S.DoughnutContent>
      <S.ResultWrap>
        <Font text="전체결과" kind="Body1" color="gray300" />
        {data?.polls[6]?.options.map((option, index) => (
          <S.MenuAndPercent key={option.id}>
            <S.MenuWrap>
              <S.PointLine
                style={{ backgroundColor: labelColor[index] }}
              ></S.PointLine>
              <Font text={option.description} kind="Heading3" color="gray600" />
            </S.MenuWrap>
            <Font text={`${option.voteRate}%`} kind="Body1" color="gray600" />
          </S.MenuAndPercent>
        ))}
      </S.ResultWrap>
    </S.Container>
  );
}
