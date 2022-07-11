import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
    ResultDescription,
    Relationship,
    TitleSpan,
    ChmiImg,
    ChmiName,
    ShareBox,
    ReturnButton,
} from '../../components/window';

const Result = () => {
    const resultObject = {
        title: '',
        key: '',
        media: '',
        name: '',
        description: [],
        expression: { en: '', ko: '' },
        chemi: { best: '', worst: '' },
    }
    const [result, setResult] = useState(resultObject)
    const [bestResult, setBestResult] = useState(resultObject)
    const [worstResult, setWorstResult] = useState(resultObject)

    const router = useRouter();

    const totalScore = useSelector((state: any) => state.main.score)
    const resultTypes = useSelector((state: any) => state.main.resultTypes)

    const resultKey: any = resultTypes.find((type: any) => type.value === totalScore).key

    useEffect(() => {
        axios.get(`https://ebti.realclass.co.kr/api/result/${resultKey}`)
            .then(res => {
                setResult(res.data)
            })
            .catch(err => console.log('error', err))
        axios.get(`https://ebti.realclass.co.kr/api/result/${result.chemi.best}`)
            .then(res => {
                setBestResult(res.data)
            })
            .catch(err => console.log('error', err))
        axios.get(`https://ebti.realclass.co.kr/api/result/${result.chemi.worst}`)
            .then(res => {
                setWorstResult(res.data)
            })
            .catch(err => console.log('error', err))

    }, [result])
    const copyLink = () => {
        var dummy = document.createElement("input");
        var text = location.href;

        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.queryCommandSupported("copy")
        document.body.removeChild(dummy);
    }

    const goReturn = () => {
        router.push('/')
    }

    return (
        <MainWrap>
            <ResultWrap>
                <ResultTypeText>{result.title}</ResultTypeText>
                <ResultCharacter>
                    <ResultCharacterText color={'#FFFFFF'}>{'<' + result.media + '>'}</ResultCharacterText>
                    &nbsp;
                    <ResultCharacterText color={'#FFF086'}>{result.name}</ResultCharacterText>
                </ResultCharacter>
                <ResultWindowWrap whole={true}>
                    <TitleBar>
                        <TitleBarButton color="#F56A6A" left="10px" />
                        <TitleBarButton color="#5963FF" left="23px" />
                    </TitleBar>
                    <ResultContentWrap>
                        <ResultImage src={'/images/' + result.key + '.png'} />
                        <TypeTalk>{result.name} 유형들의 영어 한마디</TypeTalk>
                        <EnglishBox color='#000D50'>
                            {result.expression.en}
                        </EnglishBox>
                        <EnglishBox color='#000000'>
                            {result.expression.ko}
                        </EnglishBox>
                    </ResultContentWrap>
                </ResultWindowWrap>
                <ResultWindowWrap whole={true}>
                    <TitleBar>
                        <TitleBarButton color="#F56A6A" left="10px" />
                        <TitleBarButton color="#5963FF" left="23px" />
                    </TitleBar>
                    <ResultContentWrap>
                        <ResultDescription>
                            <b>{result.description[0]}</b>
                            <br />
                            <br />
                            {result.description[1]}
                            <br />
                            <br />
                            {result.description[2]}
                            <br />
                            <br />
                            {result.description[3]}
                        </ResultDescription>
                    </ResultContentWrap>
                </ResultWindowWrap>
                <Relationship>
                    <ResultWindowWrap whole={false}>
                        <TitleBar>
                            <TitleBarButton color="#F56A6A" left="10px" />
                            <TitleBarButton color="#5963FF" left="23px" />
                        </TitleBar>
                        <ResultContentWrap>
                            <TitleSpan>만나면<br />좋은 캐릭터</TitleSpan>
                            <ChmiImg url={'/images/' + bestResult.key + '.png'}></ChmiImg>
                            <ChmiName>{'<' + bestResult.media + '>'}&nbsp;{bestResult.name}</ChmiName>
                        </ResultContentWrap>
                    </ResultWindowWrap>
                    <ResultWindowWrap whole={false}>
                        <TitleBar>
                            <TitleBarButton color="#F56A6A" left="10px" />
                            <TitleBarButton color="#5963FF" left="23px" />
                        </TitleBar>
                        <ResultContentWrap>
                            <TitleSpan>거리두기가<br />필요해요</TitleSpan>
                            <ChmiImg url={'/images/' + worstResult.key + '.png'}></ChmiImg>
                            <ChmiName>{'<' + worstResult.media + '>'}&nbsp;{worstResult.name}</ChmiName>
                        </ResultContentWrap>
                    </ResultWindowWrap>
                </Relationship>
                <ResultWindowWrap whole={true}>
                    <TitleBar>
                        <TitleBarButton color="#F56A6A" left="10px" />
                        <TitleBarButton color="#5963FF" left="23px" />
                    </TitleBar>
                    <ResultContentWrap>
                        <TitleSpan>
                            결과 공유하고, 친구와 궁합 확인하기
                        </TitleSpan>
                        <ShareBox>
                            <Image src='/images/kakao.png' width={46} height={46} style={{ marginRight: '23px' }} alt='카카오톡 공유하기' />
                            <Image src='/images/twitter.png' width={46} height={46} style={{ marginRight: '23px' }} alt='트위터 공유하기' />
                            <Image src='/images/link.png' width={46} height={46} alt='링크 복사하기' onClick={() => copyLink} />
                        </ShareBox>
                    </ResultContentWrap>
                </ResultWindowWrap>
                <ReturnButton onClick={goReturn}>
                    <a>
                        테스트&nbsp;<ResultCharacterText color={'#FFF086'}>다시하기</ResultCharacterText>
                    </a>
                </ReturnButton>
            </ResultWrap>
        </MainWrap>
    );
};

export default Result;