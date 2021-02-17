import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar';
import WeatherInfo from './WeatherInfo/WeatherInfo';

class App extends Component {
  state = {
    searchItem:'',
    data:'',
    arr:'',
    image:'https://cdn.wallpapersafari.com/94/68/DstqIy.jpg',
  }
  urls = {
    '01d':'https://www.wallpaperflare.com/static/497/672/903/sunrise-panoramic-photography-ocean-sunset-wallpaper.jpg',
    '01n':'https://cdn.wallpapersafari.com/7/73/DV9qfJ.jpg',
    '02d':'https://solodialogue.files.wordpress.com/2011/02/bright-blue-sky-with-a-few-tiny-white-clouds.jpg',
    '02n':'https://thewallpaper.co/wp-content/uploads/2020/07/night-cloud-wallpaper-hd-desktop-wallpapers-4k-high-definition-windows-10-mac-apple-colourful-images-backgrounds-free-2560x1600-1-1200x750.jpg',
    '03d':'http://il7.picdn.net/shutterstock/videos/4983866/thumb/1.jpg', 
    '03n':'http://il7.picdn.net/shutterstock/videos/4983866/thumb/1.jpg',
    '04d':'https://freerangestock.com/sample/119740/broken-white-clouds-over-blue-sky.jpg', // 04d 04n
    '04n':'https://freerangestock.com/sample/119740/broken-white-clouds-over-blue-sky.jpg',
    '09d':'https://s2.best-wallpaper.net/wallpaper/2560x1600/1711/Heavy-rain-water-drops_2560x1600.jpg', // 09d 09n
    '09n':'https://s2.best-wallpaper.net/wallpaper/2560x1600/1711/Heavy-rain-water-drops_2560x1600.jpg', // 09d 09n
    '10d':'https://images.wallpaperscraft.com/image/drops_glass_rain_134314_1920x1080.jpg', // 10d 10n
    '10n':'https://images.wallpaperscraft.com/image/drops_glass_rain_134314_1920x1080.jpg',

    '11d':'https://i.ytimg.com/vi/kTy8QI-6wuM/maxresdefault.jpg', 
    '11n':'https://i.ytimg.com/vi/kTy8QI-6wuM/maxresdefault.jpg',
    '13d':'https://images.wallpaperscraft.com/image/lake_forest_snow_130421_1920x1080.jpg', 
    '13n':'https://images.wallpaperscraft.com/image/lake_forest_snow_130421_1920x1080.jpg', 
    '50d':'https://blog.hdwallsource.com/wp-content/uploads/2016/01/mist-pictures-27412-28129-hd-wallpapers-768x480.jpg', 
    '50n':'https://blog.hdwallsource.com/wp-content/uploads/2016/01/mist-pictures-27412-28129-hd-wallpapers-768x480.jpg',
  }
  submitHandler = (event) =>
  {
    event.preventDefault();

    const city = event.target.elements[0].value;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=dc5e0b01624774ec38b22102ff48d8a8`;
    console.log(url);
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      //console.log(json.list);
      if(json.cod!=="404")
      {  
        console.log("in here");
        var arr = new Array();
        var mini=100,maxi=0,day="";

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
        for(var i=0;i<40;i++)
        {
            if(i == n)
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
                arr.push({min:mini,max:maxi,day:weekday[((d.getDay())+cnt)%7],city:json.city.name,country:json.city.country,date:date,hour:arr1});
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
            arr1.push({time:json.list[i].dt_txt.slice(11,16),temp:json.list[i].main.temp,url:"http://openweathermap.org/img/w/"+json.list[i].weather[0].icon+".png"});
            
        }
        let date="";
        let dd=datestr.slice(8,10),mm=datestr.slice(5,7),yyyy=datestr.slice(0,4);
        date=dd+"/"+mm+"/"+yyyy;
        arr.push({min:mini,max:maxi,day:weekday[((d.getDay())+4)%7],city:json.city.name,country:json.city.country,date:date,hour:arr1});
        //console.log(arr);
        this.setState({
          searchItem:event.target.elements[0].value,
          data:json,
          arr:arr,
          image:'https://cdn.wallpapersafari.com/94/68/DstqIy.jpg'
        });
      }
      else
      {
        alert("Location not found");
      }

    })
  }
  weatherHandler = (id) =>
  {
    console.log("changing image");
    
    if(this.state.image!==this.urls[id])
      this.setState({image:this.urls[id]});
    
  }
  render() {
    return (
      <div className="App">
        <style>{'body {background-image: url('+this.state.image+')}'}</style>
        <SearchBar handleSubmit={this.submitHandler}/>
        <WeatherInfo city={this.state.searchItem} data={this.state.data} arr={this.state.arr} index={0} changeImage={this.weatherHandler}/>
      </div>
    )
  }
}

export default App;