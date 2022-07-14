import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MainWrap } from '../../components/main';
import {
    ResultWrap, ResultTypeText, ResultWindowWrap, TitleBar, TitleBarButton, ResultContentWrap,
    ResultCharacter, ResultCharacterText, ResultImage, TypeTalk, EnglishBox, ResultDescription,
    Relationship, TitleSpan, ChmiImg, ChmiName, ShareBox, ReturnButton, ShareImg,
} from '../../components/window';

const Result = () => {
    const resultObject = {
        title: '',
        key: '',
        media: '',
        name: '',
        description: [''],
        expression: { en: '', ko: '' },
        chemi: { best: '', worst: '' },
    }
    const [result, setResult] = useState(resultObject)
    const [bestResult, setBestResult] = useState(resultObject)
    const [worstResult, setWorstResult] = useState(resultObject)

    const router = useRouter();
    const { key } = router.query;

    useEffect(() => {
        if (key) {
            axios.get(`https://ebti.realclass.co.kr/api/result/${key}`)
                .then(res => {
                    setResult(res.data)
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
                })
                .catch(err => console.log('error', err))
        }
    }, [result, key])
    const copyLink = () => {
        const dummy = document.createElement("input");
        const text = location.href;

        document.body.appendChild(dummy)
        dummy.value = text;
        dummy.select();
        document.execCommand("copy")
        document.body.removeChild(dummy)
        alert('링크가 복사되었습니다')
    }

    const goReturn = () => {
        router.push('/')
    }

    return (
        <div>
            <MainWrap>
                <ResultWrap>
                    <ResultTypeText>{result && result.title}</ResultTypeText>
                    <ResultCharacter>
                        <ResultCharacterText color={'#FFFFFF'}>{result && '<' + result.media + '>'}</ResultCharacterText>
                        &nbsp;
                        <ResultCharacterText color={'#FFF086'}>{result && result.name}</ResultCharacterText>
                    </ResultCharacter>
                    <ResultWindowWrap whole={true}>
                        <TitleBar>
                            <TitleBarButton color="#F56A6A" left="10px" />
                            <TitleBarButton color="#5963FF" left="23px" />
                        </TitleBar>
                        <ResultContentWrap>
                            <ResultImage src={result && '/images/' + result.key + '.png'} />
                            <TypeTalk>{result && result.name} 유형들의 영어 한마디</TypeTalk>
                            <EnglishBox color='#000D50'>
                                {result && result.expression.en}
                            </EnglishBox>
                            <EnglishBox color='#000000'>
                                {result && result.expression.ko}
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
                                <b>{result && result.description[0]}</b>
                                <br />
                                <br />
                                {result && result.description[1]}
                                <br />
                                <br />
                                {result && result.description[2]}
                                <br />
                                <br />
                                {result && result.description[3]}
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
                                <ChmiImg url={bestResult && '/images/' + bestResult.key + '.png'}></ChmiImg>
                                <ChmiName>{bestResult && '<' + bestResult.media + '>'}&nbsp;{bestResult.name}</ChmiName>
                            </ResultContentWrap>
                        </ResultWindowWrap>
                        <ResultWindowWrap whole={false}>
                            <TitleBar>
                                <TitleBarButton color="#F56A6A" left="10px" />
                                <TitleBarButton color="#5963FF" left="23px" />
                            </TitleBar>
                            <ResultContentWrap>
                                <TitleSpan>거리두기가<br />필요해요</TitleSpan>
                                <ChmiImg url={worstResult && '/images/' + worstResult.key + '.png'}></ChmiImg>
                                <ChmiName>{worstResult && '<' + worstResult.media + '>'}&nbsp;{worstResult.name}</ChmiName>
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
                                <ShareImg src='/images/kakao.png' alt='카카오톡 공유하기' />
                                <ShareImg src='/images/twitter.png' alt='트위터 공유하기' />
                                <ShareImg onClick={copyLink} src='/images/link.png' alt='링크 복사하기' />
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
        </div>
    );
};

export default Result;