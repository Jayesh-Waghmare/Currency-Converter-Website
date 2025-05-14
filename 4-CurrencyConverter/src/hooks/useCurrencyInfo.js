import {useEffect, useState} from "react"

// Custom hook
function useCurrencyInfo(currency){
    // use hook to store the currency
    const [data, setData] = useState({});
    // API should be called when page is reloaded
    useEffect( () => {
        // API
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) //convert into json 
        .then((res) => setData(res[currency])) // here the response is in json 
    }, [currency]) // whenever the change in currency happens then again call API
    return data;
}

export default useCurrencyInfo;