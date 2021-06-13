import React from 'react'
import './NextDay.css'

export default function NextDay(props) {
    return (
        <div>
            <div className="day">{props.day}</div>
            <div className='DayCard' onClick={()=>{
                props.changeIndex();
                props.changeImage(props.icon);
                }}>
                <center><img src={props.url} className="icon" alt=""/><br/>{Math.floor((props.min+props.max)/2)}<sup>o</sup>C<br/></center>
            </div>
        </div>
    )
}
