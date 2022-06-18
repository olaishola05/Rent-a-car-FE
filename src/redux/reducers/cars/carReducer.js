const DISPLAY_CAR = 'RENT_A_CAR_FE/CARS/DISPLAY_CAR';
const URL = 'https://rent-a-car-brytebee.herokuapp.com/api/v1';

const displayCar = (payload) => ({
  type: DISPLAY_CAR,
  payload,
});

export const fetchCarFromDB = (id) => async (dispatch) => {
  const req = await (await fetch(`${URL}/cars/${id}`)).json();
  dispatch(displayCar(req));
};

const carReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_CAR:
      return action.payload;
    default:
      return state;
  }
};

export default carReducer;
