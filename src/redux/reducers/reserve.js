const RESERVATION_SUCCESS = 'reserve_a_car/RESERVATION_SUCCESS';

const initialState = {};

const postReservation = () => ({
  type: RESERVATION_SUCCESS,
});

export const postReservationToApi = (data) => (dispatch) => {
  fetch('https://rent-a-car-brytebee.herokuapp.com/api/v1/reservations', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token,
    },
    body: JSON.stringify({ reservation: data }),
  })
    .catch((err) => err)
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
