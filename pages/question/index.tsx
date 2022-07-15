import axios from 'axios';
import { useRouter } from 'next/router';
import { RootState } from '../../store/modules';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { MainWrap } from '../../components/main';
import {
    QuestionWrap,
    QuestionWindowWrap,
    TitleBar,
    TitleBarButton,
    ContentWrap,
    Count,
    ProgressBar,
    BeforeProgress,
    Proceeded,
    QuestionBox,
    QuestionText,
    QuestionImageWrap,
    QuestionImage,
    ResultBox,
    ResultButton,
    ResultButtonSpan
} from '../../components/window';
import { getResult, increaseSeq, setScore } from '../../store/modules/main';

const QuestionWindow = () => {
    const questionObject = {
        text: '',
        image: '',
        option1: '',
        option2: '',
        optionPoint1: 0,
        optionPoint2: 0,
    }
    const [question, setQuestion] = useState(questionObject)
    const [correct, setCorrect] = useState(0)
    const dispatch = useDispatch()
    const router = useRouter()

    const seq: number = useSelector((state: RootState) => state.main.seq)
    const seqArray: number[] = useSelector((state: RootState) => state.main.seqArray)
    const resultKey: string = useSelector((state: RootState) => state.main.resultKey)
    const questionSeq = seqArray[seq]

    useEffect(() => {
        axios.get(`http://localhost:3000/api/question`)
            .then(res => {
                const questions: typeof questionObject[] = res.data.question
                setQuestion(questions[questionSeq])
            })
            .catch(err => console.log('error', err))
        setCorrect(0)
    }, [seq, questionSeq])

    const nextPage = (option: number) => {
        setCorrect(option)
        dispatch(setScore(option === 1 ? question.optionPoint1 : question.optionPoint2))
        if (seq === 2) {
            //마지막 문항 선택 시 점수 계산. 결과페이지로 이동
            dispatch(getResult())
            setTimeout(function () {
                router.push({
                    pathname: '/result',
                    query: { key: resultKey },
                })
            }, 500)
        } else {
            //선택된 버튼 색상 변경, 0.5초 후 다음 페이지 이동
            setTimeout(function () {
                dispatch(increaseSeq())
            }, 500)
        }
    }

    return (
        <div>
            <MainWrap>
                <QuestionWrap>
                    <QuestionWindowWrap>
                        <TitleBar>
                            <TitleBarButton color="#F56A6A" left="10px" />
                            <TitleBarButton color="#5963FF" left="23px" />
                        </TitleBar>
                        <ContentWrap>
                            <Count>0{seq + 1}/03</Count>
                            <ProgressBar>
                                {
                                    seq === 0 &&
                                    <>
                                        <Proceeded seq={0} />
                                        <BeforeProgress seq={1} />
                                        <BeforeProgress seq={2} />
                                    </>
                                }
                                {
                                    seq === 1 &&
                                    <>
                                        <Proceeded seq={0} />
                                        <Proceeded seq={1} />
                                        <BeforeProgress seq={2} />
                                    </>
                                }
                                {
                                    seq === 2 &&
                                    <>
                                        <Proceeded seq={0} />
                                        <Proceeded seq={1} />
                                        <Proceeded seq={2} />
                                    </>
                                }
                            </ProgressBar>
                            <QuestionBox>
                                <QuestionText color='#00D37A'>
                                    Q .
                                </QuestionText>
                                <br />
                                <QuestionText color='#000000'>
                                    {
                                        question.text
                                    }
                                </QuestionText>
                                <QuestionImageWrap>
                                    <QuestionImage src={question.image} />
                                </QuestionImageWrap>
                            </QuestionBox>
                            <ResultBox>
                                <ResultButton correct={correct === 1} onClick={() => nextPage(1)}>
                                    <ResultButtonSpan>
                                        {question.option1}
                                    </ResultButtonSpan>
                                </ResultButton>
                                <ResultButton correct={correct === 2} onClick={() => nextPage(2)}>
                                    <ResultButtonSpan>
                                        {question.option2}
                                    </ResultButtonSpan>
                                </ResultButton>
                            </ResultBox>
                        </ContentWrap>
                    </QuestionWindowWrap>
                </QuestionWrap>
            </MainWrap>
        </div>
    );
};

export default QuestionWindow;