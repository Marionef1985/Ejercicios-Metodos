
import React, {useState} from "react";

const Home = () => {
    const [state, setState] = useState([])
const getCityFromAddress = async () => {
const httpResponse = await fetch ("https://jsonplaceholder.typicode.com/users");
const response = await httpResponse.json();
setState(response)

}

    return (
        <>
        <button onClick={getCityFromAddress}>Click Me!</button>
        {state.map((elemento)=>(<p>{elemento.address.city}</p>))}
        </>
    )
}

export default Home;