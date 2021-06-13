
import React from 'react'
import './HourBasedInfo.css'

export default function HourBasedInfo(props) {
    return (
        <div className="hourContainer">
            
            {
                props.hour.map((item,index)=>{
                    return <div key={index} className="hourDetails" onClick={()=>{
                            props.changeImage(item.icon);
                        }}><center><div className="infocard">{item.time}</div>
                        <div className="infocard"><img src={item.url} alt=""/></div>
                        <div className="infocard">{Math.floor(item.temp)}<sup>o</sup>C</div></center>
                    </div>
                })  
            }
        </div>
    )
}
