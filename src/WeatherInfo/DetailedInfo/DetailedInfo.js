import React from 'react'
import './DetailedInfo.css'
import WeatherCard from './WeatherCard/WeatherCard';
import HourBasedInfo from './HourBasedInfo/HourBasedInfo';

export default function DetailedInfo(props) {
    return (
        <div className='details'>
            <WeatherCard min={props.min} max={props.max} day={props.day} city={props.city} country={props.country} date={props.date}/>
            <HourBasedInfo hour={props.hour} changeImage={props.changeImage}/>
        </div>
    )
}
