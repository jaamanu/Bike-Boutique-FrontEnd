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
        getReservations(JSON.parse(data.data))
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
            {reservations &&
                reservations.map((reserv) => {
                    console.log(reserv)
                    return (
                        <div key={reserv.id}>
                            <h1>{reserv.motorcycles.name}</h1>
                            <h5>{reserv.city}</h5>
                            <h5>{reserv.start_date}</h5>
                            <h5>{reserv.end_date}</h5>
                            <button type='submit' onClick={() => deleteIt(reserv.id)}>Delete</button>
                        </div>
                    )
                })}
        </div>
    )
}

export default Reservations