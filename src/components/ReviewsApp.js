import React , {useState, useEffect} from "react"
import {reviewsData} from "../data/reviewsData"

const data = reviewsData

const ReviewsApp = () => {
    const [people, setPeople] = useState(data) 

    return <>
        <h1 className="review__app">ReviewsApp</h1>
        <div className="brrrapp"></div>

        <article className="review__app__main">
        <div className="img__container">
            
        </div>
        </article>
    </>
}

export default ReviewsApp