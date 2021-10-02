import styled from "styled-components";
import {FaArrowLeft} from "react-icons/fa"
import {FaArrowRight} from "react-icons/fa"


export const ReviewArticle = styled.div`
width: 70%;
min-width: 480px;
height: 500px;
background: #141516;
border-radius: 10px;
margin-top: 2em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`

export const TitleWrapper = styled.div`
width: 170px;
display: flex;
flex-direction: column;
justify-content: center;
background: none;
`

export const ReviewTitle = styled.h1`
color: salmon;
background: none;

`
export const ReviewBrrrrrr = styled.div`
height: 3x;
border: 3px solid salmon;
background: none;
`

export const PersonWrapper = styled.div `
margin-top: 50px;
margin-bottom: 10px;
width: 90%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;
background: none;
`

export const PersonImg = styled.img`
height: 25px;
border-radius: 50px;
`

export const PersonName = styled.h1`
font-size: 16px;
color: white;
`

export const PersonWork = styled.p`
font-size: 16px;
color: salmon;
`

export const PersonCaption = styled.p`
font-size: 13px;
color: white;
`

export const IconsWrapper = styled.div`
height: 20px;
width: 20%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background: none;
`

export const IconLeft = styled(FaArrowLeft)`
color: white;
cursor: pointer;
height: 100%;
background: none;

&:hover{
    color: salmon;
}
`

export const IconRight = styled(FaArrowRight)`
color: white;
cursor: pointer;
height: 100%;
background: none;

&:hover{
    color: salmon;
}
`

