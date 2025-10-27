import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneCar } from '../JS/Actions/carActions'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'antd'
import { ArrowLeftOutlined } from "@ant-design/icons";


const CarDescription = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {id} = useParams();

    const car = useSelector((state) => state.CarReducer.car)

    useEffect(() => {
      dispatch(getOneCar(id))
    }, [])

    const features = [
      { name: "Make", description: car.make },
      {
        name: "Model",
        description:
          car.model,
      },
      { name: "Color", description: car.color },
      {
        name: "Year",
        description: car.year,
      },
      { name: "Price", description: `$ ${car.price}` },

    ];
    
  return (
    <div className="min-h-screen">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Car Description
          </h2>
          <p className="mt-4 text-gray-500">{car.description}</p>
          <Button onClick={()=> navigate(-1)} className="mt-4" type="primary" icon={<ArrowLeftOutlined />}>
            Back to list
          </Button>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src={car.picture}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}

export default CarDescription