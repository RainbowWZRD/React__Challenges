import React , {useState} from "react"
import {tourData} from './tourData'

const TourApp = () => {
    const [tours, setTours] = useState(tourData)
    const [more, setMore] = useState(false)

    const deleteTours = (ev) => {
        ev.preventDefault()
        // const newTours = tours.filter(tour => tour.id !== tour.id)
        // setTours(newTours)
        setTours(tours.filter(tour => tour.id !== tour.id)) 
    }

    return <>
    <section className="tour__app">
    <div className="title__div">
        <h1 className="title">Tour App</h1>
        <div className="brrrrr" />
    </div>

    <ul className="tours__ul">
        {tours.map((tour) =>{
            const {id, image_url, price, title, caption} = tour
            return <article className="tour__card" 
            key={id}>
            <img className="tour__image" 
            src={image_url}
            />
            <div className="wrapper__tp">
            <h2 className="tour__title">{title}</h2>
            <h3 className="tour__price">${price}</h3>
            </div>

            <h4 className="tour__caption">{more === false ? caption.substr(0, 250) : caption}
            <a onClick={() => setMore(!more)}> {more === false ? "more" : "less"}</a></h4>
             <button
             onClick={deleteTours}
             style={{padding : "1em 2em", 
             border : "1px solid red", 
             background:"transparent", 
             borderRadius : "10px",
             marginBottom : "1em",
             marginTop : "0.5em",
             }}
             >Delete Offer</button>
            </article>
        })}
    </ul>
    </section>
    </>
}

export default TourApp