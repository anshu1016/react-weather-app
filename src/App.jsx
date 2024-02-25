import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Forecast from './components/Forecast'
import {getFormattedWeatherData, getWeatherData} from './services/WeatherServices'
import { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {

  const [q,setQ] = useState({q:"germany"});
  const [units,setUnits] = useState("metric");
  const [weather,setWeather] = useState(null);

  useEffect(()=>{
    const fetchWeather = async() =>{
      const data = await getFormattedWeatherData(q.q).then((data)=>{
         toast.success("successfully fetched Weather for "+ weather?.name+" ,"+weather?.country)
        setWeather(data)});
      const message = q.q?q.q:"Current Location";
      toast.info("Fetching Weather For "+message)
      console.log(weather,"WEATHER_DATA");
    }
    fetchWeather();
  },[q,units]);

const formatBackgroundColor = () =>{
  if(!weather) return "from-cyan-700 to-blue-500"
}
 
  return (
    <>
  <div className='mx-auto max-w-screen-md mt-4 py-5 px-4 sm:px-0 md:px-16 lg:px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-auto sm:h-fit shadow-xl shadow-gray-400'>
        <TopButtons setQ={setQ} />

    <Inputs weather={weather} setQ={setQ} setUnits={setUnits}/>
    {weather && (
      <div>
      <TimeAndLocation weather={weather} />
    <TemperatureAndDetails weather={weather} />
    <Forecast title={"Hourly"} items={weather.hourly}/>
    <Forecast title={"Weekly"} items={weather.daily}/>
    </div>
    )}
    
  </div>
  <ToastContainer autoClose={5000} theme='colored'newestOnTop={true} />
</>  )
}

export default App
