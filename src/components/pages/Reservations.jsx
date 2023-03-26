/* eslint-disable */
import './../pages/styles/reservations.css'
import React, { useEffect} from 'react'
import { useSelector } from 'react-redux';


const Reservations = () => {
    const currentUser = useSelector(state => state.currentUser);
    const getReservation = async () => {
        if (!currentUser) {
            return;
          }
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
        <h2>Reservation Data:</h2>
   
        </div>
    )
}

export default Reservations