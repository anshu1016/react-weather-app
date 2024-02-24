import { DateTime } from "luxon";
import { formatToLocalTime } from "../services/WeatherServices";

const TimeAndLocation = ({weather}) =>{

    const {name,region,country,tz_id,localtime_epoch} = weather;
    function formatToLocalTime(localtime_epoch, tz_id) {
        
        const localTime = DateTime.fromMillis(localtime_epoch * 1000).setZone(tz_id);
    
       
        return localTime.toFormat("EEE, dd LLL yyyy, 'Local Time:' hh:mm a");
    }
    const formattedTime = formatToLocalTime(localtime_epoch, tz_id);
    console.log(formattedTime);
    return (<div>
        <div className="flex flex-row items-center justify-center my-6 ">
            <p className="text-xl font-extralight text-white "> {formattedTime}</p>
        </div>
        <div className="flex items-center justify-center my-3 ">
            <p className="text-3xl text-white font-medium ">{name}, {country}</p>
        </div>
    </div>)
}
export default TimeAndLocation;