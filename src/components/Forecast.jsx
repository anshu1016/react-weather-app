const Forecast = ({title,items}) =>{
    return(
        <div>
            <div className="flex items-center justify-center my-6 ">
                <p className="text-white font-medium uppercase ">{title} Weather Forecast</p>

            </div>
            <hr className="my-2" />
            <div className="flex flex-row items-center justify-between text-white">
                {items?.map((item)=>(
                     <div className="flex flex-col items-center justify-center ">
                     <p className="font-light text-sm">
                         {item.title}
                     </p>
                     <img src={item.icon}
                     alt="weather image"
                     className="w-12 my-1"/>
                     <p className="font-medium ">{`${item.temp.temp_c.toFixed()}°`}</p>
                 </div>

                ))}
               


               
            </div>


        </div>
    )
}

export default Forecast;