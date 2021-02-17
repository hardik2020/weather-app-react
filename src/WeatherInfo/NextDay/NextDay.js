import React from 'react'
import './NextDay.css'

export default function NextDay(props) {
    return (
        <div className='DayCard' onClick={props.changeIndex}>
            <center>{Math.floor(props.min)}<sup>o</sup>C/{Math.floor(props.max)}<sup>o</sup>C<br/>
            {props.day}</center>
        </div>
    )
}
