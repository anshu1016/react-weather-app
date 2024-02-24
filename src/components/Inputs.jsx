import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons";
import { useState } from "react";
import { toast } from "react-toastify";
const Inputs = ({setQ,setUnits,weather,units}) =>{
    const [city,setCity] = useState("");
    const handleSearch = () =>{
         if(city!==""){
            setQ({q:city})
         }
    }

    const handleLocationClick =() =>{
        if(navigator.geolocation){
            toast.info("Fetching User Location")
            navigator.geolocation.getCurrentPosition((position)=>{
                toast.success("Succesfully Fetched")
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setQ({q:lat,lon})
            })
        }
    }
    return(
        <div className="flex flex-row items-center justify-around my-6">
            <div className="flex items-center justify-center w-3/4 space-x-4">
                <input className="focus:outline-none capitalize text-xl font-light p-2 w-full shadow-xl placeholder:lowercase " type="text" placeholder="search for city..."
                onChange={(e)=>setCity(e.target.value)}
                />
                <UilSearch size={25} onClick={handleSearch} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
                <UilLocationPoint onClick={handleLocationClick} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            </div>
            <div className="flex flex-1/4 w-1/4 items-center justify-center  ">
            
            </div>
        </div>
    )
}
export default Inputs;