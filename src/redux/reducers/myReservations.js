const FETCH_MY_RESERVATIONS = 'FETCH_MY_RESERVATIONS';

const initialState = [];

const getMyResevations = (payload) => ({
  type: FETCH_MY_RESERVATIONS,
  payload,
});

/* eslint no-unused-vars: disable */

export const getMyResevationsFromApi = () => (dispatch) => {
  fetch('http://127.0.0.1:3001/api/v1/reservations', {
    method: 'GET',
    headers: {
      Authorization: localStorage.token,
    },
  })
    .catch((err) => console.log(err))
    .then((res) => res.json())
    .then((data) => {
      const reservations = [];
      const currentUser = JSON.parse(window.localStorage.getItem('user'));
      Object.entries(data).forEach(([key, value]) => {
        if (value.user_id === currentUser.user.id) {
          reservations.push(value);
        }
      });
      dispatch(getMyResevations(reservations));
    });
};

const myReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MY_RESERVATIONS':
      return action.payload;
    default:
      return state;
  }
};

export default myReservationReducer;
