import React from "react"

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={process.env.PUBLIC_URL + `/images/${props.coverImg}`} alt="katie"/>
            <div className="card--stats">
                <img className="card--star" src={process.env.PUBLIC_URL +  "/images/star.png"} alt="star"/>
                <span className="gray">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"> <b>From ${props.price}</b> / person </p>
        </div>
    )
}