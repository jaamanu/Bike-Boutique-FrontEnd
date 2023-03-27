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
      <h1 className="NavH1">e-Bikes</h1>
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
            RESERVE e-BIKE
          </NavLink>
        
          <NavLink to = "/addvehicle" className="link">
            <RiAddCircleLine />
            ADD e-BIKE
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
