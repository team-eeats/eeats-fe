import * as S from "./style"
import { Font } from "../../Styles/Font"
import useInputStore from "../../store/useInputStore"
import { useEffect, useState } from "react"
import Button from "../../Components/Button"
import { useNavigate, useParams } from "react-router-dom"
import { ModifySuggest, SuggestDetail } from "../../Apis/suggestions"

const Modify = () => {
  const navigate = useNavigate()

  const { suggestionId } = useParams()
  const { inputs, setInput } = useInputStore()

  const { mutate: modifySuggest } = ModifySuggest(suggestionId || '')

  const [active, setActive] = useState<boolean>(false)
  const [content, setContent] = useState<string>("")
  const [contentCount, setContentCount] = useState<number>(0)

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput("title", e.target.value)
  }

  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)
    setContentCount(newContent.length)
  }

  const handleUpload = () => {
    const suggestData = {
      title: inputs["title"],
      content,
    };
    try {
      modifySuggest(suggestData)
      navigate('/suggest')
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    const handleDetail = async () => {
      try {
        const response = await SuggestDetail(suggestionId || '')
        setInput("title", response.data.title)
        setContent(response.data.content)
        setContentCount(response.data.content.length)
        console.log("건의 디테일", response.data)
      } catch (error) {
        console.error(error)
      }
    }
    handleDetail()

  }, [suggestionId, setInput]);

  useEffect(() => {
    setActive(!!inputs["title"] && !!content && contentCount <= 30);
  }, [inputs, content, contentCount]);

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
              <S.Input
                placeholder="제목을 작성해주세요"
                value={inputs["title"] || ""}
                onChange={onTitleChange}
              />
            </S.LabelWrap>
            <S.LabelWrap>
              <Font text="건의 내용" kind="Label2" />
              <S.TextAreaWrap>
                <S.TextArea
                  placeholder="건의 내용을 작성해주세요"
                  onChange={onContentChange}
                  value={content}
                />
                <S.CharacterLimitation>
                  <Font
                    text={`${contentCount}/30`}
                    kind="Caption2"
                    color={active ? "gray300" : "main300"}
                  />
                </S.CharacterLimitation>
              </S.TextAreaWrap>
            </S.LabelWrap>
          </S.Write>
        </S.ContentBox>
        <Button text="수정하기" activate={active} onClick={handleUpload} />
      </S.SubmitContent>
    </S.Container>
  )
}

export default Modify