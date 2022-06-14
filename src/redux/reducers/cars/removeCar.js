const DELETE_CAR = 'RENT_A_CAR/REDUX/DELETE_CAR';

export const deleteCar = (id) => ({
  type: DELETE_CAR,
  id,
});

const deleteCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CAR:
      return state.filter((car) => car.id !== action.id);
    default:
      return state;
  }
};

export default deleteCarReducer;
