import React from "react"

export default function Card(props) {
    return(
        <div className="Card">
            <img className="card--img" src={process.env.PUBLIC_URL + `/images/${props.coverImg}`} alt={props.imageURL} />
            <div className="Text">
                <div className="card--inline">
                    <i className="material-icons">place</i>
                    <p className="card--location">{props.location}</p>
                    <a className="card--map" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h3 className="card--date">{props.startDate} - {props.endDate}</h3>
                <p className="card--desc">{props.description}</p>

            </div>
        </div>
    );

}