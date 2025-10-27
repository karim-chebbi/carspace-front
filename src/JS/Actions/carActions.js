import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS, GET_ONE_CAR_FAIL, GET_ONE_CAR_LOAD, GET_ONE_CAR_SUCCESS } from "../ActionTypes/carActionTypes"
import axios from "axios"

export const getAllCars = () => async (dispatch) => {
    dispatch({type: GET_CARS_LOAD})
    try {
        const result = await axios.get("/api/cars/get_all_cars");
        dispatch({type: GET_CARS_SUCCESS, payload: result.data})
    } catch (error) {
        dispatch({type: GET_CARS_FAIL, payload: error.response.data})
    }
}

export const getOneCar = (id) => async (dispatch) => {
  dispatch({ type: GET_ONE_CAR_LOAD });
  try {
    const result = await axios.get(`/api/cars/get_car/${id}`);
    dispatch({ type: GET_ONE_CAR_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_ONE_CAR_FAIL, payload: error.response.data });
  }
};

export const addCar = (newCar) => async (dispatch) => {
  dispatch({ type: ADD_CAR_LOAD });
  try {
    const result = await axios.post('/api/cars/add_car', newCar);
    dispatch({ type: ADD_CAR_SUCCESS, payload: result.data });
    dispatch(getAllCars());
  } catch (error) {
    dispatch({ type: ADD_CAR_FAIL, payload: error.response.data });
  }
};