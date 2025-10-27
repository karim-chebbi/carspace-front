import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import EditCar from './EditCar';
import DeleteCar from './DeleteCar';

const CarCard = ({car}) => {
    const navigate = useNavigate()
  return (
    <div as={Link} key={car._id} className=" w-80 cursor-pointer h-auto">
      <img
        onClick={() => navigate(`/car_description/${car._id}`)}
        alt={car.make}
        src={car.picture}
        className="cursor-pointer h-40 w-full rounded-md bg-gray-200 object-cover hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{car.make}</h3>
          <p className="mt-1 text-sm text-gray-500">{car.model}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${car.price}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <EditCar />
        <DeleteCar />
      </div>
    </div>
  );
}

export default CarCard