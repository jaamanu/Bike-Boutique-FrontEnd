/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/apiCalls';
import './styles/login.css';

const Login = () => {
  const [name, setname] = useState('')
  const [err, setErr] = useState(null);
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()
try {
  await login(dispatch, { name });
} catch (error) {
  console.log(error.response.data.message)
  setErr(error.response.data.message);

}
    
  }
  return (
    <div className="LoginDiv">
      <form className="LoginForm">
        <h1>Login</h1>
        <input onChange={(e) => setname(e.target.value)} type="text" name="" id="" placeholder="name" />
        {/* <input onChange={(e) => setname(e.target.value)} type="text" password="" id="" placeholder="password" /> */}
        <button type="submit" onClick={handleLogin} >Login</button>
        {err && setTimeout(() => {setErr(null)}, 3000) && <span>{err}</span>}
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