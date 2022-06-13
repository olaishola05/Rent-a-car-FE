const RESERVATION_SUCCESS = 'reserve_a_car/RESERVATION_SUCCESS';

const initialState = {};

const postReservation = () => ({
  type: RESERVATION_SUCCESS,
});

export const postReservationToApi = (data) => (dispatch) => {
  fetch('http://127.0.0.1:3001/api/v1/reservations', {
    method: 'POST',
    body: data,
  })
    .catch((err) => console.log(err))
    .then((response) => response.json());
  dispatch(postReservation());
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVATION_SUCCESS:
      return [action.payload];
    default:
      return state;
  }
};

export default reservationReducer;
