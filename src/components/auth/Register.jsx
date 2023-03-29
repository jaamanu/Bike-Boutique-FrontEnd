/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../redux/apiCalls';
import './styles/login.css';

const Register = () => {
  const [name, setName] = useState('');
  const [err, setErr] = useState(null);

  const dispatch = useDispatch();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await createUser(dispatch, { name });
    } catch (error) {
      // console.log(error.response.data.message);
      setErr(error.response.data.message);
    }
  };
  // console.log(err);
  return (
    <div className="LoginDiv">
      <form className="LoginForm">
        <h2>Create Account</h2>
        <input onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder="Enter username" />
        {/* <input onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder="Enter password" /> */}
        <button onClick={registerUser} type="submit">Signup</button>
        {err && setTimeout(() => {setErr(null)}, 3000) && <span>{err}</span>}
        <p>
          Have an account?
          <Link to="/login" className="Loginlink">
            &nbsp; Login...
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
