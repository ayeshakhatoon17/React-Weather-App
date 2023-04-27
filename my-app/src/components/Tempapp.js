import React,{useEffect, useState} from "react"
import "./css/styles.css"

const Temapp=()=>{
    const [city,setCity]=useState(null)
    const [search,setSearch]=useState("Mumbai")

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&&appid=4b17029fe7abd658f5a0c40d275db76e`
            const response=await fetch(url)
            const resJson=await response.json()
            console.log(resJson.main)
            setCity(resJson.main)
        }
        fetchApi()
    },[search])
    return(
        <>
        <div className="box">
            <div className="inputData">
            <input type="search" className="inputField" value={search} onChange={(event)=>{
                setSearch(event.target.value)
            }}/>
            </div>
      {!city?(
            <p className="errorMsg">No Data Found</p>
        ):(
            <div>
            <div className="info" >
            <h2 className="location">
            {search}
            </h2>
            <h1 className="temp">
               <i className="fas fa-street-view"></i>{city.temp} °Cel
            </h1>
            <h3 className="tempmin_max">Min:{city.temp_min}  °Cel | Max: {city.temp_max}  °Cel</h3>
        </div>
        <div className="wave -one"> </div>
        <div className="wave -two"> </div>
        <div className="wave -three"> </div>
        </div>
        )
      }
     </div>
        </>
    )
}

export default Temapp