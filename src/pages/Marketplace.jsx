import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CarCard from '../components/CarCard'
import { getAllCars } from '../JS/Actions/carActions'
import AddCar from '../components/AddCar'

const Marketplace = () => {
  const cars = useSelector((state) => state.CarReducer.cars)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCars())
  }, [])
  
  return (
    <div className='min-h-screen px-2 md:px-14'>

      <h1 className='text-3xl font-bold text-slate-800'>Marketplace Page</h1>
      <AddCar />
      <div className='border border-slate-300 rounded my-10 p-6 min-h-screen flex flex-wrap gap-4 justify-center'>
        {
          !cars.length ? <p className='text-slate-700 text-center py-6'>No cars found</p>
          : 
          cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))
        }
      </div>
    </div>
  )
}

export default Marketplace