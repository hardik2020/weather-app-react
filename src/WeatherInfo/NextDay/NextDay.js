import React from 'react'
import './NextDay.css'

export default function NextDay(props) {
    return (
        <div className='DayCard' onClick={()=>{
            props.changeIndex();
            props.changeImage(props.icon);
            }}>
            <center>{Math.floor(props.min)}<sup>o</sup>C/{Math.floor(props.max)}<sup>o</sup>C<br/>
            {props.day}<br/><img src={props.url} /></center>
        </div>
    )
}
