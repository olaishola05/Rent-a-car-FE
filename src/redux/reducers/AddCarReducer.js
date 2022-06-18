export const AddCarToApi = (carData) => (dispatch) => {
  fetch('https://rent-a-car-brytebee.herokuapp.com/api/v1/cars', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token,
    },
    body: JSON.stringify({ car: carData }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.error || data.errors) {
        const errorMsg = data.error || data.errors;
        dispatch({ type: 'CAR_FAILED', errorMsg });
      } else {
        window.history.pushState({}, '', '/');
        window.location.reload();
      }
    });
};

const AddCarReducer = (state = { error: null }, action) => {
  switch (action.type) {
    case 'CAR_FAILED':
      return { error: action.errorMsg };
    default:
      return state;
  }
};

export default AddCarReducer;
