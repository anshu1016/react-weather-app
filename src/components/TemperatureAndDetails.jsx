import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from "@iconscout/react-unicons"
const TemperatureAndDetails = ({weather}) =>{
    const {feelslike_c,feelslike_f,humidity,icon,is_day,sunrise,sunset,temp_c,temp_f,text,wind_kph,precip_mm,pressure_mb} = weather;
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-xyan-600">
                <p className="text-white font-large">{text}</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3  ">
                <img src={icon}
                     className="w-20 "
                     alt="weather-image"
                />
                <p className="text-5xl">{`${temp_c}°`}</p>
                <div className="flex flex-col space-y-2">


                    <div className=" flex items-center justify-center font-light text-sm ">
                        <UilTemperature size={18} className="mr-1 "/>
                        Real Feel: 
                        <span className="font-medium ml-1 ">{`${feelslike_c}°`}</span>
                    </div>


                    <div className=" flex items-center justify-center font-light text-sm ">
                        <UilTear size={18} className="mr-1 "/>
                       Humidity: 
                        <span className="font-medium ml-1 ">{`${humidity}%`}</span>
                    </div>


                    <div className=" flex items-center justify-center font-light text-sm ">
                        <UilWind size={18} className="mr-1 "/>
                        Wind: 
                        <span className="font-medium ml-1 ">{`${wind_kph} km/h`}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center text-white space-x-1 text-sm py-3 ">
    <UilSun size={18}/><p className="font-light"> Rise: <span className="font-medium ml-1">{sunrise} </span></p><p className="font-light">|</p>
    <UilSunset/><p className="font-light"> Sunset: <span className="font-medium ml-1">{sunset} </span></p><p className="font-light">|</p>
    <UilArrowUp/><p className="font-light"> Pressure: <span className="font-medium ml-1">{`${pressure_mb}bar`}</span></p><p className="font-light">|</p>
    <UilArrowDown/><p className="font-light"> Precipitation: <span className="font-small ml-1">{`${precip_mm}mm`}</span></p>
</div>

        </div>
    )
}
export default TemperatureAndDetails;