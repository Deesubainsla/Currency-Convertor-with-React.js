import {useState,useEffect} from 'react';


function useCurrencyInfo(currency){
    const [data, setdata] = useState({});
   
    useEffect(()=>{
        fetch(  `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.5.1/v1/currencies/${currency}.json`)

        .then((res)=> res.json())
        .then((res)=>setdata(res[currency]));

        

    },[currency])
   
    return data;
}

export default useCurrencyInfo






// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState();

//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.5.1/v1/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]));
        
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;