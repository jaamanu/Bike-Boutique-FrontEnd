/* eslint-disable */
import './../pages/styles/reservations.css'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { deleteReservation } from '../../redux/apiCalls';

const Reservations = () => {
    const [reservations, getReservations] = useState([])
    const [success, setSuccess] = useState(null)
    const { currentUser } = useSelector((state) => state.user)
    const getReservation = async () => {
        const response = await fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/reservations`);
        const data = await response.json();
        console.log(JSON.parse(data.data))
        getReservations(JSON.parse(data.data))
        // console.log(first)
        return data;
    };

    const deleteIt = async (id) => {
        try {
            await deleteReservation(id)
            setSuccess("Reservation has been deleted")
        getReservation()
        } catch (error) {
            
        }
    }
    console.log(currentUser)
    useEffect(() => {
        getReservation()
    }, [])

    return (
        <div className="reservation_title">
        <h1 className='reserved_title'>RESERVATION</h1>
        <div className="reservationsDiv">
        {success && setTimeout(() => {setSuccess(null)},3000) && <span className='success'>{success}</span>}
            {reservations &&
                reservations.map((reserv) => {
                    console.log(reserv)
                    return (
                        <div key={reserv.id}>
                            <h1>{reserv.motorcycle.name}</h1>
                            <h5>{reserv.city}</h5>
                            <h5>{reserv.start_date}</h5>
                            <h5>{reserv.end_date}</h5>
                            <button type='submit' onClick={() => deleteIt(reserv.id)}>Delete</button>
                        </div>
                    )
                })}
        </div>
        </div>
    )
}

export default Reservations