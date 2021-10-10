import React from "react";
//import {fetchCities} from "../store/index";


//const API_KEY = "84b7361ec0542c4c396fab9e11e04614";


const Cities = () => {

  

    const gettingWeather =  () => {
    
        //preventDefault();
        console.log("Click");
        
}
    


    return (  
        <>
    <form>
    <h1>{"OK"}</h1>
            <input type="text"
            
            placeholder="Місто"
           />
            <button onClick = {gettingWeather} >Отримати погоду</button>
    </form>
    </>
    )
}

    export default Cities;