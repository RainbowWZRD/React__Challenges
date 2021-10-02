import React , {useState, useEffect} from "react"
import {reviewsData} from "../data/reviewsData"

const people = reviewsData
console.log(people);

const ReviewsApp = () => {
    const [index, setIndex] = useState(1)
    const  {id, name, work, caption, profilePic} = reviewsData[index]

    console.log(people.length);

    const next = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return newIndex
            console.log(newIndex);
        })
    }

    const prev = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return newIndex
            console.log(newIndex);
        })
    }
    return <>
    <ul>
        <li key={id}>
            <p>{name}</p>
            <img style={{width: "50px"}}
             src={profilePic} />
            <p>{work}</p>
            <p>{caption}</p>
            <button
            onClick={prev}
            >Prev</button>
            <button
            onClick={next}
            >Next</button>
        </li>
    </ul>
    </>
}

export default ReviewsApp