import react, { useEffect, useState } from 'react'
import './css/styles.css'

const Tempapp = () =>{
const [city, setCity]= useState(null)
const [search, setSearch] = useState("mumbai")

useEffect( () =>{
    const fetchApi = async () =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b0f94a0beff21f44f8af332a3a583fe8`
        const response = await fetch(url)
        const resJson = await response.json(); 
        setCity(resJson.main)
    }
    fetchApi()
},[search])
    return(
        <>
        <div className='box'>
        <div className='inputData'>
            <input type ='search' className='inputField' onChange={ (event) =>{
     setSearch(event.target.value) }  }/>
           
        </div>
        {!city ?(
            <p>No Data Found</p>
        ):(
            <div>
            <div className="info">
            <h2 className= "location">
                <i className = "fas fa-street-view"></i>
           {search}
            </h2>
            <h1 className='temp'>
             {city.temp}
            </h1>
            <h3 className='tempmin_max'>Min :5.25 Cel | Maz : 5.25Cel</h3>
     </div>
     <div className="wave-one"></div>    
     <div className="wave-two"></div>  
     <div className="wave-three"></div>
     </div> 
        )}
     </div>
   
    </>

    )
}

export default Tempapp