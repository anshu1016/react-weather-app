const TopButtons = ({setQ}) => {
    const cities=[
        {
            id:1,
            title:"Maldives"
        },{
            id:2,
            title:"Japan"
        },
        {
            id:3,
            title:"India"
        },
        {
            id:4,
            title:"Australia"
        },
        {
            id:5,
            title:"Spain"
        },
    ]
    return (
        <div className="flex flex-row items-center justify-around my-6">
            {
                cities.map((city)=><button className="text-white text-lg font-medium cursor-pointer" key={city.id} onClick={()=>setQ({q:city.title})}>{city.title}</button>)
            }
        </div>
    )
}
export default TopButtons;