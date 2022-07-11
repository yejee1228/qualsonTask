import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { MainWrap } from '../../components/main'
import {
    ResultWrap,
    ResultTypeText,
    ResultWindowWrap,
    TitleBar,
    TitleBarButton,
    ResultContentWrap,
    ResultCharacter,
    ResultCharacterText,
    ResultImage,
    TypeTalk,
    EnglishBox,
    Relationship,
    ShareBox,
} from '../../components/window';
import { getResult } from '../../store/modules/main';

const Result = () => {
    const resultObject = {}
    const totalScore = useSelector((state: any) => state.main.score)
    const resultTypes = useSelector((state: any) => state.main.resultTypes)
    const key = resultTypes.filter((type: any) => type.value === totalScore).key

    const [result, setResult] = useState({})
    useEffect(() => {
        axios.get(`https://ebti.realclass.co.kr/api/result/${key}`)
            .then(res => {
                const result: typeof resultObject = res.data
                setResult(result)
            })
            .catch(err => console.log('error', err))
    }, [])
    const copyLink = () => {
        //현재 주소 클립보드 복사하기
    }
    return (
        <MainWrap>
            <ResultWrap>
                <ResultTypeText>개X마이웨이</ResultTypeText>
                <ResultCharacter>
                    <ResultCharacterText color={'#FFFFFF'}>{'<19곰 테드>'}</ResultCharacterText>
                    &nbsp;
                    <ResultCharacterText color={'#FFF086'}>테드</ResultCharacterText>
                </ResultCharacter>
                <ResultWindowWrap whole={true}>
                    <TitleBar>
                        <TitleBarButton color="#F56A6A" left="10px" />
                        <TitleBarButton color="#5963FF" left="23px" />
                    </TitleBar>
                    <ResultContentWrap>
                        <ResultImage src='/images/ted.png' />
                        <TypeTalk>테드 유형들의 영어 한마디</TypeTalk>
                        <EnglishBox>
                            {`You got a lot of problem, don't you?`}
                            <br /><br />
                            {`당신 뭔가 정상이 아니죠?`}
                        </EnglishBox>
                    </ResultContentWrap>
                </ResultWindowWrap>
                <ResultWindowWrap whole={true}>
                    <TitleBar>
                        <TitleBarButton color="#F56A6A" left="10px" />
                        <TitleBarButton color="#5963FF" left="23px" />
                    </TitleBar>
                    <ResultContentWrap>
                        <b>말보다</b>
                        <br />
                        항상 자신만만
                        ...
                    </ResultContentWrap>
                </ResultWindowWrap>
                <Relationship>
                    <ResultWindowWrap whole={false}>
                        <TitleBar>
                            <TitleBarButton color="#F56A6A" left="10px" />
                            <TitleBarButton color="#5963FF" left="23px" />
                        </TitleBar>
                        <ResultContentWrap>
                            <b>말보다</b>
                            <br />
                            항상 자신만만
                            ...
                        </ResultContentWrap>
                    </ResultWindowWrap>
                    <ResultWindowWrap whole={false}>
                        <TitleBar>
                            <TitleBarButton color="#F56A6A" left="10px" />
                            <TitleBarButton color="#5963FF" left="23px" />
                        </TitleBar>
                        <ResultContentWrap>
                            <b>말보다</b>
                            <br />
                            항상 자신만만
                            ...
                        </ResultContentWrap>
                    </ResultWindowWrap>
                </Relationship>
                <ResultWindowWrap whole={true}>
                    <TitleBar>
                        <TitleBarButton color="#F56A6A" left="10px" />
                        <TitleBarButton color="#5963FF" left="23px" />
                    </TitleBar>
                    <ResultContentWrap>
                        결과 공유하고, 친구와 궁합 확인하기
                        <ShareBox>
                            <Image src='/images/kakao.png' width={46} height={46} style={{ marginRight: '23px' }} alt='카카오톡 공유하기' />
                            <Image src='/images/twitter.png' width={46} height={46} style={{ marginRight: '23px' }} alt='트위터 공유하기' />
                            <Image src='/images/link.png' width={46} height={46} alt='링크 복사하기' onClick={() => copyLink} />
                        </ShareBox>
                    </ResultContentWrap>
                </ResultWindowWrap>
            </ResultWrap>
        </MainWrap>
    );
};

export default Result;