import { DateTime } from "luxon";

const API_KEY = "4d49c1675dde4cfdb9f61714242402"
const BASE_URL = "http://api.weatherapi.com/v1/forecast.json"


const getWeatherData = (searchParams) =>{
    console.log("searcgParams",searchParams)
    const url = new URL(BASE_URL);
    url.search = new URLSearchParams({key:API_KEY,q:searchParams,days:6,aqi:"no"});
   
    return fetch(url).then((res)=>res.json())
}

const formatCurrentWeather = (data) =>{


    const {
        location: {
            localtime_epoch,
            tz_id,
            name,
            region, 
            country,
            lat,
            lon,
            localtime,
        },current:{
            temp_c,
            temp_f,
            is_day,
            condition:{
                text,
                icon
            },
            wind_kph,
            humidity,
            feelslike_c,
            feelslike_f,
            pressure_mb,
            precip_mm
        },
        forecast: { forecastday: [{ astro: { sunrise, sunset } }] },
        forecast
    } = data;
   return {name,region,country,lat,lon,localtime,temp_c,temp_f,is_day,text,icon,wind_kph,humidity,feelslike_c,feelslike_f,sunrise,sunset,forecast,tz_id,localtime_epoch,pressure_mb,precip_mm};
}

const formatForecastWeather = (data) =>{

  
   
  let daily = data.slice(1,7)?.map((daily)=>{
   
       
        return {
            title: formatToDateAndTime(daily?.date_epoch),
            temp: {
                temp_f: daily?.day?.avgtemp_f,
                temp_c: daily?.day?.avgtemp_c,
            },
            icon: daily?.day?.condition?.icon
        };
    })

   let hourly = data[0]?.hour?.slice(2,8)?.map((hourly)=>{
    
        return {
            title:formatToLocalTime(hourly?.time_epoch),
            temp:{
                temp_c:hourly?.temp_c ,
                temp_f:hourly?.temp_f
            },
            icon:hourly?.condition?.icon,
            
        }
    })
    return {daily,hourly};
}

const formatToDateAndTime = (dateEpoch) =>DateTime.fromSeconds(dateEpoch).toFormat("EEEE");
const formatToLocalTime = (time_epoch,tz_id)=>DateTime.fromMillis(time_epoch*1000).setZone(tz_id).toFormat("hh:mm a");



const getFormattedWeatherData = async(searchParams) =>{
   
const formattedWeatherData = await getWeatherData(searchParams).then(formatCurrentWeather);

const forecastdata = await getWeatherData(searchParams).then(({forecast})=>formatForecastWeather(forecast.forecastday))
// const forecastData= formatForecastWeather(forecast)
return {...formattedWeatherData,...forecastdata};
}


export {getWeatherData,getFormattedWeatherData,formatToLocalTime};