import React, { useState } from 'react'
import {BsFillTrash2Fill} from "react-icons/bs"
import "./List.css"

const List = () => {

    const [cars, setCars] = useState ([ "Audi" , "BMW" , "Mercedes" , "Camry" , "Toyota" , "Honda" , "Hundai" , 'Ford'])

    const [value,setValue] = useState("")

    const changeHandler = (event) => {
      setValue(event.target.value)
    }
    
    const addCarHandler = () => {
      if (value === ""){
        return alert("Bosh Yazdynyz")
      }
      if (!cars.includes(value)) {
      const newCars = [value , ...cars]
      setCars(newCars)
      setValue("")
      } else {
        alert("Yazan masynynyz ozal sanawa girizilen , bashga at yazmagagynyzy hayys edyaris!")
      }
    }
    const deleteHandler = (carName) => {
      const deletedCarList = cars.filter((car) => car !== carName)
      setCars(deletedCarList)
    }
  return (
    <div className='list__container'>

        <div className='addCar'>
        <h2>Add a new car</h2>
        <input value={value} onChange={changeHandler} placeholder='car name' type='text' />
        <br />
        <button onClick={addCarHandler}>Add</button>
        </div>
        <h1>List Of Cars</h1>

        <ul>{cars.map(carName => {
            return <li key={carName}>{carName}
            <BsFillTrash2Fill onClick={() => deleteHandler(carName)} className='list-icon' />
            </li>
        })}</ul>
    </div>
  )
}

export default List