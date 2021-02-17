
import React, { Component } from 'react'
import './WeatherInfo.css'
import NextDay from './NextDay/NextDay'
import DetailedInfo from './DetailedInfo/DetailedInfo';

export default class WeatherInfo extends Component {
    state = {
        min:'',
        max:'',
        index:0,
        city:'',
        day:'',
        date:'',
        hour:[]
    }
    componentDidUpdate()
    {
        console.log(this.props);
        if(this.state.min!=this.props.arr[this.state.index].min)
        {
            this.setState({min:this.props.arr[this.state.index].min,max:this.props.arr[this.state.index].max,day:this.props.arr[this.state.index].day,date:this.props.arr[this.state.index].date,hour:this.props.arr[this.state.index].hour});
            console.log("update");
        }
        else if(this.state.city!=this.props.city)
        {
            this.setState({min:this.props.arr[this.state.index].min,max:this.props.arr[this.state.index].max,city:this.props.city,index:0,day:this.props.arr[this.state.index].day,date:this.props.arr[this.state.index].date,hour:this.props.arr[this.state.index].hour});
            console.log("update");
        }
    }
    changeIndex = (index)=>{
        this.setState({index:index});
    }

    
    
    render() {
        console.log("rendr");
        console.log(this.state.index);
        let weatherinfo = null;
        if(this.props.city)
        {
            weatherinfo = (
                <div className="div2">
                    <DetailedInfo min={this.state.min} max={this.state.max} changeImage={this.props.changeImage} date={this.state.date} day={this.state.day} city={this.props.arr[0].city} country={this.props.arr[0].country} hour={this.state.hour}/>
                    <div className='nextDays'>
                        {
                            this.props.arr.map((item,index)=>{
                                return <NextDay key={index} min={item.min} max={item.max} day={item.day} changeIndex={()=>{this.changeIndex(index)}}/>
                            })
                        }
                    </div>
                </div>
            )
        }
        return (
            <div className="div1">
                {weatherinfo}
            </div>
        )
    }
}
