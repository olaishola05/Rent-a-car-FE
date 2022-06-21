const DELETE_CAR = 'RENT_A_CAR/REDUX/DELETE_CAR';
// const baseUrl = 'http://127.0.0.1:3001/api/v1/cars';
const baseUrl = 'https://rent-a-car-brytebee.herokuapp.com/api/v1/cars';

export const deleteCar = (id) => ({
  type: DELETE_CAR,
  id,
});

export const deleteCarFromAPI = (id) => async (dispatch) => {
  await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
      Authorization: localStorage.token,
    },
  });
  dispatch(deleteCar(id));
};

const deleteCarReducer = (state = [], action) => {
  switch (action.type) {
    case DELETE_CAR:
      return state.filter((car) => car.id !== action.id);
    default:
      return state;
  }
};

export default deleteCarReducer;
