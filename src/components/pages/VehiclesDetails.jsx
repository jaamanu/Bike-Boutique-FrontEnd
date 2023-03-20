import React from 'react'
import { useLocation } from 'react-router-dom'

const VehiclesDetails = () => {
    const location = useLocation()
    const { state } = location
    console.log(state)
    return (
        <div>
            <img src={state.image} alt="" style={{ width: '200px' }} />
            <p>{state.name}</p>
            <p>{state.price}</p>
            <p>{state.model}</p>
            <p>{state.description}</p>
            <p>{state.available.toLocaleString()}</p>
        </div>
        // <div>VehiclesDetails</div>
    )
}

export default VehiclesDetails