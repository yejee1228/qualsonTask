import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { MainWrap } from '../../components/main'
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
    ResultCorrectButton,
    ResultNotCorrectButton,
} from '../../components/window';
import { increaseSeq, setQuestions, setScore } from '../../store/modules/main';

const QuestionWindow = () => {
    const [question, setQuestion] = useState({})
    const [optionScore, setOptionScore] = useState(0)
    const [correct, setCorrect] = useState(0)
    const dispatch = useDispatch()
    const router = useRouter()

    const seq = useSelector((state: any) => state.main.seq)
    const seqArray = useSelector((state: any) => state.main.seqArray)
    const questionSeq = seqArray[seq]

    if (seq === 2) {
        router.push('/result')
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/api/question`)
            .then(res => {
                const questions: object[] = res.data.question
                setQuestion(questions[questionSeq])
            })
            .catch(err => console.log('error', err))
    }, []);

    const nextPage = (option: number) => {
        //setCorrect(option)
        //alert('다음으로')
    }


    return (
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
                            <Proceeded seq={0} />
                            <BeforeProgress seq={1} />
                            <BeforeProgress seq={2} />
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
                            {correct === 0 &&
                                <>
                                    <ResultNotCorrectButton onClick={nextPage(1)}>{question.option1}</ResultNotCorrectButton>
                                    <ResultNotCorrectButton onClick={nextPage(2)}>{question.option2}</ResultNotCorrectButton>
                                </>}
                            {correct === 1 &&
                                <>
                                    <ResultCorrectButton onClick={nextPage(1)}>{question.option1}</ResultCorrectButton>
                                    <ResultNotCorrectButton onClick={nextPage(2)}>{question.option2}</ResultNotCorrectButton>
                                </>}
                            {correct === 2 &&
                                <>
                                    <ResultNotCorrectButton onClick={nextPage(1)}>{question.option1}</ResultNotCorrectButton>
                                    <ResultCorrectButton onClick={nextPage(2)}>{question.option2}</ResultCorrectButton>
                                </>}
                        </ResultBox>
                    </ContentWrap>
                </QuestionWindowWrap>
            </QuestionWrap>
        </MainWrap>
    );
};

export default QuestionWindow;