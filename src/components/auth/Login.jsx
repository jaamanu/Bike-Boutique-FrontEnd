/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/apiCalls';
import './styles/login.css';

const Login = () => {
  const [name, setname] = useState('')
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()

    login(dispatch, { name });
  }
  return (
    <div className="LoginDiv">
      <form className="LoginForm">
        <h1>Login</h1>
        <input onChange={(e) => setname(e.target.value)} type="text" username="" id="" placeholder="username" />
        <input onChange={(e) => setname(e.target.value)} type="text" password="" id="" placeholder="password" />
        <button type="submit" onClick={handleLogin} >Login</button>
        <p>
          Don&apos;t Have an account?
          <Link to="/register" className="Loginlink">
            &nbsp; Create an account...
          </Link>
        </p>
      </form>
    </div>
  )
};

export default Login;