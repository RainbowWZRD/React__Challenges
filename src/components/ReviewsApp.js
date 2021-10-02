import React , {useState, useEffect} from "react"
import {reviewsData} from "../data/reviewsData"
import {
    ReviewArticle,
    TitleWrapper,
    ReviewTitle,
    ReviewBrrrrrr,
    PersonWrapper,
    PersonImg,
    PersonName,
    PersonWork,
    PersonCaption,
    IconsWrapper,
    IconLeft,
    IconRight
} from "./ReviewAppElements"

const data = reviewsData

const ReviewsApp = () => {
    const [people, setPeople] = useState(data) 
    const [current , setCurrent ] = useState(0)

    console.log(people);

    return <>
    <ReviewArticle>
    <TitleWrapper>
        <ReviewTitle>ReviewsApp</ReviewTitle>
        <ReviewBrrrrrr />
    </TitleWrapper>

    <PersonWrapper >
     <PersonImg />
    <PersonName></PersonName>
    <PersonWork></PersonWork>
    <PersonCaption></PersonCaption>

    <IconsWrapper>
        <IconLeft />
        <IconRight />
    </IconsWrapper>
    </PersonWrapper>

    </ReviewArticle>
    </>
}

export default ReviewsApp