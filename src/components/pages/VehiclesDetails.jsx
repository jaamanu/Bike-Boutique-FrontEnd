import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './styles/details.css';

const VehiclesDetails = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="detailsDiv">
      <div>
        <img src={state.image} alt="" style={{ width: '70%' }} />
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
          <div>
            <NavLink to="/addreservation" className="reserve-link">
              Reserve
            </NavLink>
          </div>

        </div>
      </div>
    </div>

  );
};

export default VehiclesDetails;
