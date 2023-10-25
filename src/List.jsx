import React from 'react'
import "./List.css"

const List = () => {

    const cars = [ "Audi" , "BMW" , "Mercedes" , "Camry" , "Toyota" , "Honda" , "Hundai" , 'Ford']

  return (
    <div className='list__container'>
        <h2>List Of Cars</h2>
        <ul>{cars.map(carName => {
            return <li key={carName}>{carName}</li>
        })}</ul>
    </div>
  )
}

export default List