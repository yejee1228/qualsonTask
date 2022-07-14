import styled from "styled-components";

export const QuestionWrap = styled.div`
width: 100%;
height: fit-content;
`
export const QuestionWindowWrap = styled.div`
width: 90%;
height: 90%;
margin: 44px 5%;
position:relative;
display: inline-block;
border: 2px solid #000000;
background: #FFFFFF;
`

export const TitleBar = styled.div`
width: 100%; 
height: 22px;
position: relative;
background-color: #FFF086;
border-bottom: 2px solid #000000;
`

export const TitleBarButton = styled.div<{ left: string; color: string }>`
width: 6px;
height: 6px;
position: absolute;
top: 8px;
left: ${({ left }) => left};
background-color: ${({ color }) => color};
border: 1.6px solid #000000;
border-radius: 6px;
`

export const ContentWrap = styled.div`
width: 100%;
height: calc(100% - 22px);
position: relative;
padding: 30px;
`

export const Count = styled.p`
width: 100%;
text-align: right;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;
letter-spacing: -0.7px;
color: #000000;
`

export const ProgressBar = styled.div`
width: 100%;
height: 4px;
padding: 1.4px;
position: relative;
background: linear-gradient(90deg, #000000 0%, #000000 99.54%);
border: 1.4px solid #000000;
border-radius: 4.5px;
`

export const Proceeded = styled.div<{ seq: number }>`
width: calc(100% / 3 - 1px);
height: 4px;
position:absolute;
left: calc(100% / 3 * ${({ seq }) => seq} + ${({ seq }) => 0.5 * seq}px);
top: 0;
background: #00D37A;

&: first-child{
    border-radius: 4.5px 0px 0px 4.5px;
}
&: last-child{
    border-radius: 0px 4.5px 4.5px 0px;
}
`

export const BeforeProgress = styled.div<{ seq: number }>`
width: calc(100% / 3 - 1px);
height: 4px;
position:absolute;
left: calc(100% / 3 * ${({ seq }) => seq} + ${({ seq }) => 0.5 * seq}px);
top: 0;
background: #E7E7E7;

&: last-child {
    border-radius: 0px 4.5px 4.5px 0px;
}
`

export const QuestionBox = styled.div`
margin: 28px 0;
`

export const QuestionText = styled.span<{ color: string }>`
color: ${({ color }) => color};
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 28px;
letter-spacing: -2.4px;
`

export const QuestionImageWrap = styled.div`
text-align: -webkit-center;
`
export const QuestionImage = styled.img`
width: 100%;
height: auto;
padding-top : 23px; 
`

export const ResultBox = styled.div`
text-align: -webkit-center;
`
export const ResultButton = styled.div<{ correct: boolean }>`
width: 100%;
height: 49px;
margin: 16px 0;
position:relative;
border-radius: 24.5px;
font-family: 'NotoSansCJKkr';
font-size: 16px;
line-height: 16px;
text-align: center;
letter-spacing: -0.9px;
color: ${({ correct }) => correct ? `#FFFFFF` : `#494949`};
background-color: ${({ correct }) => correct ? `#5963FF` : `#F1F1F1`};
border: none;
`
export const ResultButtonSpan = styled.span`
width:100%;
position:absolute;
top: 50%;
left: 50%;
transform: translateX(-50%) translateY(-50%);
`

export const ResultWrap = styled.div`
width: 100%;
height: fit-content;
padding: 15px;
text-align: -webkit-center;
`

export const ResultTypeText = styled.p`
width: 80%;
height: 38px;
padding: 8px 30px;
margin: 13px 0 15px 0;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 22px;
text-align: center;
letter-spacing: 1px;
color: #FFFFFF;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #000000;
text-shadow: 1px 1px 0px #000000;
background: linear-gradient(
    to bottom, 
    #19A77900 0%, 
    #19A77900 50%,
    #19A779 50%, 
    #19A779 100%
    );
`

export const ResultCharacter = styled.div`
width : 80%;
height: 49px;
padding: 9px;
background: #5963FF;
border: 2px solid #000000;
border-radius: 24.5px;
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 26px;
text-align: center;
letter-spacing: -1.5px;
`

export const ResultCharacterText = styled.span`
color: ${(props) => props.color};
`

export const ResultWindowWrap = styled.div<{ whole: boolean }>`
width: calc(${({ whole }) => whole ? `100% - 65px` : `50% - 20px`});
height: auto;
margin: ${({ whole }) => whole ? `17.5px` : `0 10px 0 0`};
background: url(/images/resultBackground.png) 50% 50%;
background-size: cover;
position: relative;
border: 2px solid #000000;
&.last-child{
    margin-right: 0px
}
@media(max-width: 420px){
    width: calc(${({ whole }) => whole ? `100% - 55px` : `50% - 15px`});
    margin: ${({ whole }) => whole ? `12.5px` : `0 10px 0 0`};
}
`

export const ResultContentWrap = styled.div`
width: 100%;
height: auto;
`

export const ResultImage = styled.div<{ src: string }>`
width: 158px;
height: 158px;
position:relative;
margin: 17px;
margin-top: 17px;
border-radius : 80px;
border: 1px solid  #000000;
background : url(${({ src }) => src});
background-size: contain;
`

export const TypeTalk = styled.p`
width: fit-content;
height: fit-content;
padding: 3px 10px;
margin-bottom: 19px;
background: #4963FF;
color: #FFFFFF;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 19px;
text-align: center;
letter-spacing: -1px;
`

export const EnglishBox = styled.p<{ color: string }>`
width: auto;
height: auto;
margin: 0;
margin-bottom: 19px;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
text-align: center;
letter-spacing: 0.2px;
color: ${({ color }) => color};
`

export const ResultDescription = styled.div`
padding: 13px 14px 30px 14px;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-size: 13px;
line-height: 23px;
letter-spacing: -0.7px;
text-align:left;
color: #000000;
`

export const Relationship = styled.div`
width: calc(100% - 35px);
margin: 32.5px;
display: flex;
@media(max-width: 420px){
    margin: 27.5px;
}
`

export const TitleSpan = styled.div`
padding-top: 19px;
padding-bottom: 9px;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
letter-spacing: -1px;
color: #000000;
`

export const Chmi = styled.div`
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
letter-spacing: -1px;
color: #000000;
`

export const ChmiImg = styled.div<{ url: string }>`
width: 98px;
height: 98px;
background: url(${({ url }) => url});
background-size: cover;
border: 1px solid #000000;
border-radius: 50px;
`

export const ChmiName = styled.div`
padding: 15px 35px 29px 35px;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 10px;
text-align: center;
letter-spacing: -0.7px;
color: #000000;
@media(max-width: 420px){
    padding: 15px 0 29px;
}
`
export const ShareBox = styled.div`
width: 100%;
margin: 21px auto;
padding: 17px 74px 0 74px;
@media(max-width: 420px){
    padding: 17px 0 0
}
`
export const ShareImg = styled.img`
width: 46px;
height: 46px;
margin-right:23px;
@media(max-width: 420px){
    margin-right: 15px;
}
&:last-child{
    margin:0
}
`
export const ReturnButton = styled.div`
width: 70%;
height: 49px;
padding: 13px 0;
margin: 40px 0;
border-radius: 24.5px;
font-family: 'NotoSansCJKkr';
font-size: 26px;
line-height: 16px;
text-align: center;
letter-spacing: -0.9px;
color: #FFFFFF;
background: #F56A6A;
border: 2.2px solid #000000;

`