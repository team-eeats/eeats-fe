import { useEffect, useState } from "react";
import { Font } from "../../Styles/Font";
import * as S from "./Styled";
import { AllergyWarning } from "../../Apis/allergy";
import { Color } from "../../Styles/Color";

/**
 *
 * @returns 해당 급식에 포함된 알레르기 정보를 알려주는 컴포넌트
 */

const AllergyNotification = () => {
  const [allergy, setAllergy] = useState<string>("");

  useEffect(() => {
    const TodayAllergy = async () => {
      try {
        // const today = new Date();
        // const formattedDate = today
        //   .toISOString()
        //   .slice(0, 10)
        //   .replace(/-/g, "");
        const response = await AllergyWarning("20241123");
        setAllergy(response.data);
      } catch (error) {
        console.error("데이터 로딩 오류:", error);
      }
    };
    TodayAllergy();
  }, []);

  return (
    <>
      <S.Container>
        <Font
          text="오늘 급식에서 나의 알레르기는?"
          kind="Label2"
          color="gray400"
        />
        <S.SubTitle>
          {allergy.split(/(에|알레르기 성분이 있어요!)/).map((part, index) => {
            if (part === "에") {
              return (
                <span key={index}>
                  {part}
                  <br />
                </span>
              );
            }
            if (part === "알레르기 성분이 있어요!") {
              return <span key={index}>{part}</span>;
            }
            return (
              <span key={index} style={{ color: Color.main400 }}>
                {part}
              </span>
            );
          })}
        </S.SubTitle>
      </S.Container>
    </>
  );
};

export default AllergyNotification;
