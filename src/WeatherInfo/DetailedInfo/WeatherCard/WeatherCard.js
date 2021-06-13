import React from 'react'
import './WeatherCard.css'

export default function WeatherCard(props) { 
    return (
        <div className="card">
            <img src={props.url} alt="" />
            <div className="info">{props.city}, {props.country}<br/></div>
            <div className="info"><b><font size="5">{Math.floor((props.min+props.max)/2)}<sup>o</sup>C</font></b><br/></div>
            <div className="info">{props.day}<br/></div>
            <div className="info">{props.date}</div>
        </div>
    )
}
