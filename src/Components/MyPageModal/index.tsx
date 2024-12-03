import { useEffect, useState } from "react";
import { Font } from "../../Styles/Font";
import * as S from "./styled";
import Notice from "../../Assets/img/SVG/Notice.svg";
import Medicine from "../../Assets/img/SVG/Medicine.svg";
import Suggest from "../../Assets/img/SVG/suggest.svg";
import Logout from "../../Assets/img/SVG/Logout.svg";
import { MyAllergy } from "../MyAllergy";
import { NicknameChange } from "../NicknameChange";
import { ChooseAllergy } from "../ChooseAllergy";
import { MyPage } from "../../Apis/users";
import { MyPageResponse } from "../../Apis/users/type";


type MyPageModalProps = {
  onClose: () => void;
};

export const MyPageModal: React.FC<MyPageModalProps> = () => {
  const [isNicknameChangeOpen, setNicknameChangeOpen] = useState(false);
  const [isAllergyChangeOpen, setAllergyChangeOpen] = useState(false);
  const [userData, setUserData] = useState<MyPageResponse | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await MyPage();
        setUserData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserData();
  }, []);

  const setModalOpen = (modal: "nickname" | "allergy", isOpen: boolean) => {
    if (modal === "nickname") {
      setNicknameChangeOpen(isOpen);
    } else if (modal === "allergy") {
      setAllergyChangeOpen(isOpen);
    }
  };
  const handleNicknameChange = () => {
    const fetchUserData = async () => {
      try {
        const response = await MyPage();
        setUserData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserData();
  };
  const List = [
    { icon: Notice, title: "공지사항" },
    {
      icon: Medicine,
      title: "내가 갖고 있는 알레르기 변경",
      onclick: () => setModalOpen("allergy", true),
    },
    { icon: Suggest, title: "내가 쓴 건의 보기" },
  ];

  if (isNicknameChangeOpen) {
    return (
      <NicknameChange
        onClose={() => setModalOpen("nickname", false)}
        onNicknameChange={handleNicknameChange} 
      />
    );
  } else if (isAllergyChangeOpen) {
    return <ChooseAllergy onClose={() => setModalOpen("allergy", false)} />;
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.TopWrapper>
          <S.TextWrapper>
            <Font text={userData ? userData.nickname : "Loading..."} kind="Body2" />
            <S.Div onClick={() => setModalOpen("nickname", true)}>
              <Font text="수정하기" kind="Body4" color="gray300" />
            </S.Div>
          </S.TextWrapper>
          <S.Tags>
            {userData?.allergies.map((allergy, index) => (
              <MyAllergy key={index} food={allergy} />
            ))}
          </S.Tags>
        </S.TopWrapper>
        <S.Line></S.Line>
        <S.ListWrapper>
          {List.map((element, index) => (
            <S.List key={index} onClick={element.onclick}>
              <S.Icon src={element.icon} />
              <Font text={element.title} />
            </S.List>
          ))}
        </S.ListWrapper>
        <S.Line></S.Line>
        <S.List>
          <S.Icon src={Logout} />
          <Font text="로그아웃" />
        </S.List>
      </S.Container>
    </S.Wrapper>
  );
};
