/* eslint-disable */
import React from 'react';
import {
  RiLogoutCircleLine, RiReservedFill, RiHome7Line, RiAddCircleLine, RiDeleteBin6Line,
} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/apiCalls';
import './style/nav.css';

const Nav = () => {
  const dispatch = useDispatch();

  const logouts = () => {
    logout(dispatch, false);
  };

  return (
    <div className="NavDiv">
      <h2 className="NavH2">Fast-Bikes</h2>
      <nav>
        <ul>
          <NavLink to="/" className="link">
            <RiHome7Line />
            Home
          </NavLink>
          <NavLink to="/reservations" className="link">
            <RiReservedFill />
            Reservations
          </NavLink>
          <NavLink to="/addreservation" className="link">
            <RiAddCircleLine />
            Add a reservation
          </NavLink>
        
          <NavLink to = "/addvehicle" className="link">
            <RiAddCircleLine />
            Add a vehicle
          </NavLink>
          <li className="link" onClick={logouts}>
            <RiLogoutCircleLine />
            Log out
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;
