import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={process.env.PUBLIC_URL + `/images/${props.img}`} alt="katie"/>
            <div className="card--stats">
                <img className="card--star" src={process.env.PUBLIC_URL +  "/images/star.png"} alt="star"/>
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span>{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"> <b>From ${props.price}</b> / person </p>
        </div>
    )
}