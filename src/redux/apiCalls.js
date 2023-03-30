import publicRequest from '../request';
import { loginFailure, loginStart, loginSuccess } from './user/user';
import { addFailure, addStart, addSuccess } from './vehicles/addVehicle';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/login', user);
    const responseData = res.data;
    delete responseData.headers;
    dispatch(loginSuccess(responseData));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logout = (dispatch) => {
  dispatch(loginSuccess(false));
};

export const createUser = async (dispatch, user) => {
  dispatch(loginStart());

  const res = await publicRequest.post('/register', user);
  const responseData = res.data;
  delete responseData.headers;
  dispatch(loginSuccess(responseData));
};

export const addVehicle = async (dispatch, details) => {
  dispatch(addStart());
  try {
    const res = await publicRequest.post('/motorcycles', details);
    const responseData = res.data;
    delete responseData.headers;
    dispatch(addSuccess(responseData));
  } catch (err) {
    dispatch(addFailure());
  }
};

export const addReservation = async (dispatch, id, reserv) => {
  const res = await publicRequest.post(`/reservations/user/${id}`, reserv);
  const responseData = res.data;
  delete responseData.headers;
  dispatch(addSuccess(responseData));
};

export const deleteReservation = async (id) => {
  const res = await publicRequest.delete(`/reservations/${id}`);
  return res;
};
