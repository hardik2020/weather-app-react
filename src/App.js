import React, { Component, useEffect } from 'react'
import './App.css'
import WeatherInfo from './WeatherInfo/WeatherInfo';
import d01 from './images/d01.svg'; 
import n01 from './images/n01.svg'; 
import d02 from './images/d02.svg'; 
import n02 from './images/n02.svg'; 
import d03 from './images/d03.svg'; 
import d04 from './images/d04.svg'; 
import d09 from './images/d09.svg'; 
import n10 from './images/n10.svg'; 
import d10 from './images/d10.svg'; 
import d11 from './images/d11.svg'; 
import d13 from './images/d13.svg'; 
import d50 from './images/d50.svg'; 

import cd01 from './images/colorIcons/d01.png'; 
import cn01 from './images/colorIcons/n01.png'; 
import cd02 from './images/colorIcons/d02.png'; 
import cn02 from './images/colorIcons/n02.png'; 
import cd03 from './images/colorIcons/d03.png'; 
import cd04 from './images/colorIcons/d04.png'; 
import cd09 from './images/colorIcons/d09.png'; 
import cn10 from './images/colorIcons/n10.png'; 
import cd10 from './images/colorIcons/d10.png'; 
import cd11 from './images/colorIcons/d11.png'; 
import cd13 from './images/colorIcons/d13.png'; 
import cd50 from './images/colorIcons/d50.png';

import bd01 from './images/background/d01.jpg'; 
import bn01 from './images/background/n01.webp'; 
import bd02 from './images/background/d02.jpg'; 
import bn02 from './images/background/n02.jpg'; 
import bd03 from './images/background/d03.webp'; 
import bd04 from './images/background/d04.jpg'; 
import bd09 from './images/background/d09.jpg'; 
import bd10 from './images/background/d10.jpg'; 
import bd11 from './images/background/d11.jpg'; 
import bd13 from './images/background/d13.jpg'; 
import bd50 from './images/background/d50.jpg'; 
import settings from './images/settings.png';

class App extends Component {
  state = {
    searchItem:'',
    data:'',
    arr:'',
    image:'https://cdn.wallpapersafari.com/94/68/DstqIy.jpg',
    url:''
  }
  urls = {
    '01d':bd01,
    '01n':bn01,
    '02d':bd02,
    '02n':bn02,
    '03d':bd03, 
    '03n':bd03,
    '04d':bd04, // 04d 04n
    '04n':bd04,
    '09d':bd09, // 09d 09n
    '09n':bd09, // 09d 09n
    '10d':bd10, // 10d 10n
    '10n':bd10,

    '11d':bd11, 
    '11n':bd11,
    '13d':bd13, 
    '13n':bd13, 
    '50d':bd50, 
    '50n':bd50,
  };

  iconurls = {
    '01d':d01,
    '01n':n01,
    '02d':d02,
    '02n':n02,
    '03d':d03, 
    '03n':d03,
    '04d':d04, // 04d 04n
    '04n':d04,
    '09d':d09, // 09d 09n
    '09n':d09, // 09d 09n
    '10d':d10, // 10d 10n
    '10n':n10,

    '11d':d11, 
    '11n':d11,
    '13d':d13, 
    '13n':d13, 
    '50d':d50, 
    '50n':d50,
  };

  iconurls2 = {
    '01d':cd01,
    '01n':cn01,
    '02d':cd02,
    '02n':cn02,
    '03d':cd03, 
    '03n':cd03,
    '04d':cd04, // 04d 04n
    '04n':cd04,
    '09d':cd09, // 09d 09n
    '09n':cd09, // 09d 09n
    '10d':cd10, // 10d 10n
    '10n':cn10,

    '11d':cd11, 
    '11n':cd11,
    '13d':cd13, 
    '13n':cd13, 
    '50d':cd50, 
    '50n':cd50,
  };
  

  submitHandler = (city) =>
  {
    if(city!==this.state.searchItem)
    {
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=dc5e0b01624774ec38b22102ff48d8a8`;
      console.log(url);
      fetch(url)
      .then((response)=>response.json())
      .then((json)=>{
        console.log("weather API call");
        //console.log(json.list);
        if(json.cod!=="404"&&json.cod!=="400")
        {  
          
          console.log("in here");
          var arr = [];
          var mini=100,maxi=0;

          var d = new Date();
          var weekday = new Array(7);
          weekday[0] = "Sunday";
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";
          let datestr = "",d0 = json.list[0].dt_txt.slice(0,10);
          //console.log("here",d0);
          let n = 0;
          for(var i=0;i<40;i++)
          {
            console.log(json.list[i].dt_txt.slice(0,10));
            if(json.list[i].dt_txt.slice(0,10)!==d0)
            {
              n=i;
              break;
            }
          }
          //console.log(n);
          let cnt=0;
          let arr1 = [];
          let icon = "",firsticon="";
          for(i=0;i<40;i++)
          {
              if(i === n)
              {
                  n+=8;
                  if(n>40)
                  {
                    break;
                  }
                  let date="";
                  let dd=datestr.slice(8,10),mm=datestr.slice(5,7),yyyy=datestr.slice(0,4);
                  date=dd+"/"+mm+"/"+yyyy;
                  //console.log(arr1);
                  
                  if(mini>=15)// sun
                  {
                    icon = "01d";
                  }
                  else if(mini>=11)// sun with clouds
                  {
                    icon="02d";
                  }
                  else if(mini>=7)// rain
                  {
                    icon = "10d";
                  }
                  else if(mini>=2)// hist
                  {
                    icon="50d";
                  }
                  else// snow
                  {
                    icon="13d";
                  }
                  if(firsticon==="")
                  {
                    firsticon=icon;
                  }
                  arr.push({min:mini,max:maxi,url:this.iconurls[icon],icon:icon,day:weekday[((d.getDay())+cnt)%7],city:json.city.name,country:json.city.country,date:date,hour:arr1});
                  //console.log("here");
                  mini=100;
                  maxi=0;
                  cnt++;
                  arr1 = [];
              }
              if(mini>json.list[i].main.temp_min)
              {
                  mini = json.list[i].main.temp_min;
              }
              if(maxi<json.list[i].main.temp_max)
              {
                  maxi = json.list[i].main.temp_max;
              }
              datestr = json.list[i].dt_txt;
              //console.log(json.list[i].weather[0].icon);
              arr1.push({time:json.list[i].dt_txt.slice(11,16),temp:json.list[i].main.temp,url:this.iconurls[json.list[i].weather[0].icon],icon:json.list[i].weather[0].icon});
              
          }
          let date="";
          let dd=datestr.slice(8,10),mm=datestr.slice(5,7),yyyy=datestr.slice(0,4);
          date=dd+"/"+mm+"/"+yyyy;
          arr.push({min:mini,max:maxi,url:this.iconurls[icon],icon:icon,day:weekday[((d.getDay())+4)%7],city:json.city.name,country:json.city.country,date:date,hour:arr1});
          //console.log(arr);

          // fetching image from pexels API
          let cityurl = '';
          let url1 = `https://api.pexels.com/v1/search?query=${city}`
          fetch(url1,{
            method:'GET',
            headers:{
              Accept:'application/json',
              Authorization:'563492ad6f91700001000001266cb68356aa458cb885e9378ab872ff'
            }
          }).then((response)=>response.json())
          .then((json)=>{
            console.log("Image");
            console.log(json);
            console.log(json.photos.length);
            if(json.photos.length!==0)
              cityurl = json.photos[0].src.original;
            else
              cityurl = 'https://cdn.wallpapersafari.com/94/68/DstqIy.jpg'
            console.log(cityurl);
            this.setState({
              searchItem:city,
              data:json,
              arr:arr,
              image:cityurl,
              url:this.iconurls2[firsticon]
            });
          })


          
        }
        else
        {
          alert("Location not found");
        }

      })
    }
  }
  weatherHandler = (id) =>
  {
    console.log("changing image");
    
    if(this.state.image!==this.urls[id])
    {
      this.setState({image:this.urls[id],url:this.iconurls2[id]});
    }
    
  }
  onClickHandler = () => {
    var input = prompt("Enter your location");
    if(input)
      this.submitHandler(input);
  }
  componentDidMount(){
    this.submitHandler("Delhi");
  }


  render() {
    
    // let comp = null
    // if(this.state.searchItem||localStorage.searchItem)
    // {
    //   if(!this.state.searchItem)
    //   {
    //     this.state.searchItem = localStorage.searchItem
    //   }
    // }
    // else{
      
    // }
    
    console.log('render',this.state.searchItem)
    return (
      <div className="App">
        <style>{'body {background-image: url('+this.state.image+')}'}</style>
        <img src={settings} alt="" onClick={this.onClickHandler} className="submitButton"/>
        <WeatherInfo city={this.state.searchItem} data={this.state.data} arr={this.state.arr} index={0} changeImage={this.weatherHandler} url={this.state.url}/>
      </div>
    )
  }
}

export default App;