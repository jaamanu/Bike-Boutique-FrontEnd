/* eslint-disable */
import React, { useEffect, useState } from 'react'
import './styles/vehicle.css'
// import img from '../../assets/bike.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getVehicles } from '../../redux/vehicles/vehicles';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import VehiclesDetails from './VehiclesDetails';
// import { getVehicleId } from '../../redux/vehicles/vehicles';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Vehicles = () => {
    const dispatch = useDispatch();
    const vehicle = useSelector((state) => state.vehicles)
    useEffect(() => {
        dispatch(getVehicles());
    }, []);
    console.log(vehicle)

    const [get, setGet] = useState(null)

    const getId = (id) => {
        // getVehicleId(dispatch, { id })
        const getVehicleId = async () => {
            const response = await fetch(`http://localhost:3000/api/v1/motorcycles/${id}`);
            const data = await response.json();
            setGet(data)
            return data;
        };
        return getVehicleId
    }

    return (
        <div className="vehiclesDiv">
            <h2>All Vehicles</h2>
            <div className="vehicles">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                >
                {vehicle.vehicles.map((veh) => (
                    <SwiperSlide>Slide 1
                    <div className="vehicleDiv">
                        <img src={veh.image} className="vehicleImg" alt="" />
                        <h3>{veh.name}</h3>
                        <p>{veh.description}</p>
                        <NavLink onClick={getId(veh.id)} state={veh} to={`/details/${veh.id}`}>
                            {veh.id}
                        </NavLink>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Vehicles