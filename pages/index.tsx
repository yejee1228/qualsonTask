import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { MainWrap } from '../components/main';
import { Wrap, SearchBox, SearchText, TitleImage, Poster, Button, ButtonText } from '../components/title';
import { setInitialSeq, setInitialScore, setSeqArray } from '../store/modules/main';

const Home: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const goQuestionPage = () => {
    dispatch(setInitialSeq())
    dispatch(setInitialScore())
    dispatch(setSeqArray())
    router.push('/question')
  }

  return (
    <div>
      <MainWrap>
        <Wrap>
          <SearchBox>
            <SearchText>
              {'드라마&영화로 알아보는 나의 성향테스트'}
            </SearchText>
            <Image src='/images/search-icon.svg' alt='' width={11} height={12} />
          </SearchBox>
          <TitleImage />
          <Poster />
          <Button onClick={goQuestionPage}>
            <ButtonText color={'#FFFFFF'}>테스트</ButtonText>
            &nbsp;
            <ButtonText color={'#FFF086'}>시작하기</ButtonText>
          </Button>
        </Wrap>
      </MainWrap>
    </div>
  )
}

export default Home
