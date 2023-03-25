/* eslint-disable */
import './../pages/styles/reservations.css'
import React, { useEffect} from 'react'
import { useSelector } from 'react-redux';


const Reservations = ({ reservationId }) => {
 
    const  currentUser  = useSelector((state) => state.data)
    const getReservation = async () => {
        const response = await fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/reservations`);
        const data = await response.json();
        getReservation(data);
        return data;
    };

    useEffect(() => {
        getReservation()
    }, [])

    return (
        <div className="reservationsDiv">
        <h2>Reservation Data:{currentUser}</h2>
   
        </div>
    )
}

export default Reservations