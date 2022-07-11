import styled from "styled-components";

export const Wrap = styled.div`
    width: 100%;
    padding: 94px 0;
    text-align: -webkit-center;
`

export const SearchBox = styled.div`
    width: 60%;
    height: 23px;
    top: 94px;
    left: 65px;
    background: #FFFFFF;
    border: 1px solid #000;
`

export const SearchText = styled.span`
    width: 100%;
    padding: 3px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    text-align: center;
    letter-spacing: -1px;
    color: #000000;
`

export const TitleImage = styled.div`
    width: 322px;
    height: 90px;
    background: url('images/title.png') no-repeat;
    margin-top: 19px;
`

export const Poster = styled.div`
    width: 342px;
    height: 227px;
    background: url('images/poster.png') no-repeat;
    margin-top: 30px;
`

export const Button = styled.div`
    width : 80%;
    height: 49px;
    margin-top: 50px;
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

export const ButtonText = styled.span`
    color: ${(props) => props.color};
`