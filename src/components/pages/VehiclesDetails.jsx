import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiDeleteBackFill } from 'react-icons/ri';
import './styles/details.css';

const VehiclesDetails = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="detailsDiv">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src={state.image} className="detailsImg" alt="" style={{ width: '400px' }} />
        <p style={{ color: '#111' }}>
          This is a brand new
          {state.name}
        </p>
        <button
          type="button"
          style={{
            width: 'fit-content', border: 'none', fontSize: '2rem', marginTop: '1rem',
          }}
        >
          <NavLink to="/" style={{ color: '#111' }}>
            <RiDeleteBackFill />
          </NavLink>
        </button>
      </div>
      <div className="detailsSm">
        <h2>{state.name}</h2>
        <div className="detailsWordsDiv">
          <div>
            <p>Price:&nbsp; </p>
            <p>
              $
              {state.price}
            </p>
          </div>
          <div>
            <p>Model:&nbsp; </p>
            <p>{state.model}</p>
          </div>
          <div>
            <p>Description:&nbsp;</p>
            <p>{state.description}</p>
          </div>
          <div>
            <p>Available:&nbsp; </p>
            <p>{state.available.toLocaleString()}</p>
          </div>
        </div>
        <button type="button" style={{ marginTop: '2rem', border: 'none', background: 'none' }}>
          <NavLink
            to="/addreservation"
            style={{
              color: '#fff', background: 'black', padding: '0.5rem', textDecoration: 'none', fontWeight: '500',
            }}
          >
            Reserve
          </NavLink>
        </button>
      </div>
    </div>

  );
};

export default VehiclesDetails;
