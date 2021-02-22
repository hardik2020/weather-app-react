
import React from 'react'
import './HourBasedInfo.css'

export default function HourBasedInfo(props) {
    return (
        <div className="hourContainer">
            
            {
                props.hour.map((item,index)=>{
                    return <div key={index} className="hourDetails" onClick={()=>{
                            props.changeImage(item.icon);
                        }}><center>{item.time}<br/>{Math.floor(item.temp)}<sup>o</sup>C
                        <br/><img src={item.url}/></center>
                    </div>
                })  
            }
        </div>
    )
}
