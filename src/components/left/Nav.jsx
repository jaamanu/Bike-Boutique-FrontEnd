/* eslint-disable */
import React from 'react';
import {
  RiLogoutCircleLine, RiReservedFill, RiHome7Line, RiAddCircleLine, RiDeleteBin6Line,
} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/apiCalls';
import './style/nav.css';
import img from '../../assets/Screenshot 2023-03-29 at 13.56.18.png';
const Nav = () => {
  const dispatch = useDispatch();

  const logouts = () => {
    logout(dispatch, false);
  };

  return (
    <div className="NavDiv">
      <img className="logo" src={img}/>
      <nav>
        <ul>
          <NavLink to="/" className="link">
            <RiHome7Line />
            SHOWROOM
          </NavLink>
          <NavLink to="/reservations" className="link">
            <RiReservedFill />
            RESERVATION
          </NavLink>
          <NavLink to="/addreservation" className="link">
            <RiAddCircleLine />
            RESERVE BIKE
          </NavLink>

          <NavLink to="/addvehicle" className="link">
            <RiAddCircleLine />
            ADD BIKE
          </NavLink>
          <li className="link" onClick={logouts}>
            <RiLogoutCircleLine />
            SIGN OUT
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;
