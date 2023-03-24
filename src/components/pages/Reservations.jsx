/* eslint-disable */
import './../pages/styles/reservations.css'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { deleteReservation } from '../../redux/apiCalls';

const Reservations = () => {
    const [reservations, getReservations] = useState([])
    const { currentUser } = useSelector((state) => state.user)
    const getReservation = async () => {
        const response = await fetch(`http://localhost:3000/api/v1/users/${currentUser.data.id}/reservations`);
        const data = await response.json();
        getReservations(data.data)
        return data;
    };

    const deleteIt = async (id) => {
        await deleteReservation(id)
        getReservation()
    }

    useEffect(() => {
        getReservation()
    }, [])

    return (
        <div className="reservationsDiv">
            {reservations.map((reserv) => (
                <div key={reserv.id}>
                    <h1>RESERVED</h1>
                    <p>{reserv.city}</p>
                    <p>{reserv.start_date}</p>
                    <p>{reserv.end_date}</p>
                    <button type='submit' onClick={() => deleteIt(reserv.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Reservations