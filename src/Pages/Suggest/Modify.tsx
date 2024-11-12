import { useEffect, useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import Button from "../../Components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useInputStore from "../../store/useInputStore";
import { ModifySuggest, SuggestDetail } from "../../Apis/suggestions";

const Modify = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { inputs, setInput } = useInputStore();
  const [content, setContent] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  const suggestionId = state?.noticeId || "";

  const { mutate: modifySuggest } = ModifySuggest(suggestionId);
  const [inputCount, setInputCount] = useState<number>(0);
  const [excessLimit, setExcessLimit] = useState<boolean>(false);

  const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCount = e.target.value.length;
    setInputCount(newCount);
    if (newCount > 30) {
      setExcessLimit(true);
    } else {
      setExcessLimit(false);
    }
  };

  useEffect(() => {
    const handleDetail = async () => {
      if (!state?.noticeId) {
        console.error("noticeId is missing in state");
        return;
      }
      try {
        const response = await SuggestDetail(state.noticeId);
        setInput("title", response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };

    if (state?.noticeId) {
      handleDetail();
    }
  }, [state, setInput]);

  useEffect(() => {
    setActive(!!inputs["title"] && !!content);
  }, [inputs, content]);

  const handleUpload = () => {
    const suggeatData = {
      title: inputs["title"],
      content,
    };
    modifySuggest(suggeatData, {
      onSuccess: () => {
        navigate("/notice");
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <S.Container>
      <S.SubmitContent>
        <S.ContentBox>
          <S.Title>
            <Font text="건의 수정하기" kind="Heading1" />
          </S.Title>
          <S.Write>
            <S.LabelWrap>
              <Font text="제목" kind="Label2" />
              <S.Input placeholder="제목을 작성해주세요"></S.Input>
            </S.LabelWrap>
            <S.LabelWrap>
              <Font text="건의 내용" kind="Label2" />
              <S.TextAreaWrap>
                <S.TextArea
                  placeholder="건의 내용을 작성해주세요"
                  onChange={(e) => onInputHandler(e)}
                ></S.TextArea>
                <S.CharacterLimitation>
                  <Font
                    text={`${inputCount}/30`}
                    kind="Caption2"
                    color={`${excessLimit ? "main300" : "gray300"}`}
                  />
                </S.CharacterLimitation>
              </S.TextAreaWrap>
            </S.LabelWrap>
          </S.Write>
        </S.ContentBox>
        <Button text="수정하기" activate={active} onClick={handleUpload} />
      </S.SubmitContent>
    </S.Container>
  );
};

export default Modify;
