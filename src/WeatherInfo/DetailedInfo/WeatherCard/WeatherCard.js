import React from 'react'
import './WeatherCard.css'

export default function WeatherCard(props) { 
    return (
        <div className="card">
            {Math.floor(props.min)}<sup>o</sup>C/{Math.floor(props.max)}<sup>o</sup>C<br/>
            {props.city}, {props.country}<br/>
            {props.day}<br/>
            {props.date}
        </div>
    )
}
