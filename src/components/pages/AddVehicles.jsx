import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addVehicle } from '../../redux/apiCalls'
import './styles/addvehicles.css'

const AddVehicles = () => {
    const [name, setname] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [price, setprice] = useState('')
    const [model, setmodel] = useState('')
    const [available, setavailable] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addNewVehicle = (e) => {
        e.preventDefault()

        addVehicle(dispatch, { name, image, description, price, model, available });
        navigate('/');
    }

    return (
        <div className='LoginDiv'>
            <form className='LoginForm'>
                <input onChange={(e) => setname(e.target.value)} type="text" placeholder='vehicle name' />
                <input onChange={(e) => setimage(e.target.value)} type="text" placeholder='vehicle image' />
                <input onChange={(e) => setprice(e.target.value)} type="number" placeholder='price' />
                <input onChange={(e) => setmodel(e.target.value)} type="text" placeholder='vehicle model' />
                <select onChange={(e) => setavailable(e.target.value)} type="text" placeholder='available'>
                    <option value={true}>True</option>
                </select>
                <textarea maxLength={30} rows='5' onChange={(e) => setdescription(e.target.value)} type="text" placeholder='description' />
                <button type='submit' onClick={addNewVehicle}>Add</button>
            </form>
        </div>
    )
}

export default AddVehicles