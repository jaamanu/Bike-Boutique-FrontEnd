/* eslint-disable */
import './../pages/styles/reservations.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Reservations = () => {
    const [reservations, getReservations] = useState([])
    const { currentUser } = useSelector((state) => state.user)
    const getReservation = async () => {
        const response = await fetch(`http://localhost:3000/api/v1/users/${currentUser.data.id}/reservations`);
        const data = await response.json();
        getReservations(data.data)
        return data;
    };

    useEffect(() => {
        getReservation()
    }, [])

    return (
        <div className="reservationsDiv">
            {reservations.map((reserv) => (
                <p>{reserv.city}</p>
            ))}
        </div>
    )
}

export default Reservations