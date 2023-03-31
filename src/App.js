import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Reservations from './components/pages/Reservations';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Splash from './components/auth/Splash';
import Nav from './components/left/Nav';
import Vehicles from './components/pages/Vehicles';
import VehiclesDetails from './components/pages/VehiclesDetails';
import AddVehicles from './components/pages/AddVehicles';
import AddReservation from './components/pages/AddReservation';

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="AppDiv">
      <div className="App">
        {currentUser && (
        <div className="navApp">
          <Nav />
        </div>
        )}
        <div className="navRoute">
          <Routes>
            <Route path="/addreservation" element={currentUser ? <AddReservation /> : <Navigate to="/" />} />
            <Route path="/reservations" element={currentUser ? <Reservations /> : <Navigate to="/" />} />
            <Route path="/details/:id" element={currentUser ? <VehiclesDetails /> : <Navigate to="/" />} />
            <Route path="/addvehicle" element={currentUser ? <AddVehicles /> : <Navigate to="/" />} />
            <Route index element={currentUser ? <Vehicles /> : <Splash />} />
            <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register />} />
          </Routes>
        </div>
      </div>
    </div>

  );
};

export default App;
