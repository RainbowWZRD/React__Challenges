import React , {useState} from "react"
import {tourData} from './tourData'

const TourApp = () => {
    const [tours, setTours] = useState(tourData)
    console.log(tours);

    const deleteTours = (ev) => {
        const newTours = tours.filter((tour) => tour.id !== ev)
        setTours(newTours)
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

            <h4 className="tour__caption">{caption}
             <a onClick={() => console.log("eccome")}
             >{caption.length === caption.length ? "Show less" : "Show more"}
             </a></h4>
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