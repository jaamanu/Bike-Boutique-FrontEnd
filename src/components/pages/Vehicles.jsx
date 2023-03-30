/* eslint-disable */
import React, { useEffect, useState } from 'react'
import './styles/vehicle.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getVehicles } from '../../redux/vehicles/vehicles';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
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
      <h1 className="like" >BIKES ON SHOWROOM </h1>
      <h2 className="select">Please click the box to select a bike</h2>
      <div className="vehicles">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {vehicle.vehicles.map((veh) => (
            <SwiperSlide>
              <div className="vehicleDiv">
                <NavLink onClick={getId(veh.id)} state={veh} to={`/details/${veh.id}`}>
                  <button className="btn">
                  <img src={veh.image} className="vehicleImg" alt="" />
                  <h3 className="name">{veh.name}</h3>
                  <p className="desc">{veh.description}</p>
                  </button>
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