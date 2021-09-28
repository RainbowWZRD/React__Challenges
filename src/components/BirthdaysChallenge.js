import React , {useState} from "react"
import {data} from "../data/data"


const BirthdayChallenge = () => {
    const [people, setPeople] = useState(data)
    console.log(people);
    return  <>
        <section className="main">
        <h1 className="title__label">Birthdays today : {people.length}</h1>
        {people.map((person) => {
            const {id, profile_pic,birthday } = person
            return <ul className="birtdays_ul">
                <li key={id}
                className="birthdays_li"
                >
                    <h1 className="profile__pic">{profile_pic}</h1>
                    <h3 className="birthday">{birthday}</h3>
                </li>
            </ul>
        })}
        <button
        className="delete__btn"
        onClick={people.length === 3 ? () => setPeople([]) : setPeople[data]}
        >
        {people.length === 3 ? "Delete All" : "Restore"}
        </button>
        </section>
    </>
}

export default BirthdayChallenge